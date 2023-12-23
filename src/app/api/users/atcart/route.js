import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import {NextResponse} from "next/server"
import { Course } from "@/models/CourseModel";
export async function POST(request)
{
try {
    
await Connect() ; 

var {value} = await request.json()

const id = await getdatafromtoken(request) ; 

const user = await User.findOne({_id:id})


const condition =await user.clickedcarts.includes(value)


if(!condition){

    user.clickedcarts.push(value);
    await user.save();
    return NextResponse.json({msg : "SUCCESS ATcart"})

}
else 
{

    return NextResponse.json({msg :  "already buyed"})
}

} catch (error) {
    console.log(error);
    return NextResponse.json({msg : "UNSUCCESS ATCART"})
}
}



export async function GET(request) {
    try {
      
        await Connect();

        const userId = await getdatafromtoken(request);

        const user = await User.findOne({ _id: userId });

        if (user) {
          
            const courses = await Course.find({ _id: { $in: user.clickedcarts } });

            const totalPrice = courses.reduce((acc, course) => acc + course.price, 0);



            return NextResponse.json({ favoriteCourses: courses  , total : totalPrice });
        } else {
            return NextResponse.json({ msg: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Error fetching data" });
    }
}



export async function DELETE(request) {
   
    try {
    await Connect();
    

    const userId = await getdatafromtoken(request);

  
    const { id } = await request.json();
  
    const user = await User.findOne({ _id: userId });
   

    if (!user) {
      return NextResponse.json({ msg: 'User not found.' }, 404);
    }

    // Assuming clickedIds is an array of favorite course IDs
    user.clickedcarts = user.clickedcarts.filter((courseId) => courseId.toString() !== id);

    await user.save();

    return NextResponse.json({ msg: 'Favorite course deleted successfully.' });
  } catch (error) {
    console.error('Error deleting favorite course:', error);
    return NextResponse.json({ msg: 'Failed to delete favorite course.' }, 500);
  }
}
