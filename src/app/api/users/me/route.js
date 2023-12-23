import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import { NextResponse } from "next/server";

export async function GET(request)
{
    

    try {
        await Connect()
        const userid = await getdatafromtoken(request)

        if(userid){
            const user = await User.find({_id:userid}).select(("-password")) ;
            return NextResponse.json({user:user})  
        }
        

            
       
       
        
    } catch (error) {
       console.log(error); 
    }

  



}  