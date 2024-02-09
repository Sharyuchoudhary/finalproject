export const dynamic = 'force-dynamic'

import getdatafromtoken from "@/app/helpers/getdatafromtoken";
import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import { NextResponse } from "next/server";


export async function GET(request)
{
    

    try {
        await Connect()
  
         const userid = await getdatafromtoken(request)
     
       
    
        if(!userid){
          
          return new NextResponse.json({msg : "UNsSUCK"})
        } 
        const user = await User.findOne({_id:userid}).select(("-password")) ;
        
        if (!user) {
         
          return new NextResponse.json({"msg" : "UNSUCKMORE"})
            
        }
        
        return NextResponse.json({user:user})  
          
       
       
        
    } catch (error) {
    
      return NextResponse.json({"MEERROR" :error})
    }

  



}  









