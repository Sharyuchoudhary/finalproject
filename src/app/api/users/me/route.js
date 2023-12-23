import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import { NextResponse } from "next/server";

export async function GET(request)
{
    

    try {
        await Connect()
        const userid = await getdatafromtoken(request)
        console.log("The user id is" , userid);
        if(!userid){
          return NextResponse.json({"msg" : "UNSUCK"})
        } 
        const user = await User.find({_id:userid}).select(("-password")) ;
        if (!user) {
          return NextResponse.json({"msg" : "UNSUCKMORE"})
            
        }
        
        return NextResponse.json({user:user})  
            
       
       
        
    } catch (error) {
     console.log(error);
      return NextResponse.json({"meerror" : error})
    }

  



}  