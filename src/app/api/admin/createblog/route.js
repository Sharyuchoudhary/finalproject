import  {NextResponse}  from "next/server";
import Connect from "@/lib/dbconn";
import  {Blog} from "@/models/Blogmodel";
import next from "next";


export async function POST(request)
{

    try {
        
        await Connect() ; 
        const {title , content}= await request.json();
        
        await  Blog.create({title ,content})
        
        return NextResponse.json({msg :"Successfully Uploaded Blog !"})
        
    } catch (error) {
        return NextResponse.json({msg:"Failed !"})
    }



}

export async function GET()
{


try {

    await Connect() ; 
    const data = await Blog.find({})
    return NextResponse.json({data:data})
} catch (error) {
    return NextResponse.json({msg:"Failed !"})
    
}




}



export async function DELETE(request) {
 
 

    try {
      const { blogId } = await request.json();
  
      
  
      const deletedblog = await Blog.findByIdAndDelete(blogId);
  
      if (!deletedblog) {
        return NextResponse.json({message:"UNSUCCESSFULL",})
      }
     
  
  
      return  NextResponse.json({message:"DELETE SUCCESSFULL",})
    } catch (error) {
      console.log("Error deleting user:", error);
      return NextResponse.json({message:"Internal Server Error"})
    }
  }
  