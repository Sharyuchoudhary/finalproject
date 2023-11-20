import { NextResponse } from "next/server";
import { Course } from "@/models/CourseModel";
import Connect from "@/lib/dbconn";


export async function POST(request)
{


    try {

        const {c} = await request.json() ;
        await Connect() ; 
        const data = await Course.find({category:c}) 
      
        return NextResponse.json({data:data})
        
    } catch (error) {
        console.log(error);
    }




}