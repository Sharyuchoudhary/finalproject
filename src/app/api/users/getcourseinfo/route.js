export const dynamic = 'force-dynamic'

import Connect from "@/lib/dbconn";
import { Course } from "@/models/CourseModel";
import {NextResponse} from "next/server"



await Connect()

export async function GET(request){
    try {

const url1 =await request.url;
const urlParts = url1.split("=");
const idValue = urlParts[1]; 
const data = await Course.findOne({_id:idValue})

return NextResponse.json({data :data })

    } catch (error) {
        return NextResponse.json({msg :"NOPE" , "error" : error })
    }


  }
  


