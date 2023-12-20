import Connect from "@/lib/dbconn";
import { Course } from "@/models/CourseModel";
import {NextResponse} from "next/server"

export async function GET(request){
    try {
        


const url1 =request.url;
const urlParts = url1.split("=");
const idValue = urlParts[1]; 

await Connect()
const data = await Course.findOne({_id:idValue})


    return NextResponse.json({data :data})

    } catch (error) {
        return NextResponse.json({msg :"NOPE"})
    }


  }
  