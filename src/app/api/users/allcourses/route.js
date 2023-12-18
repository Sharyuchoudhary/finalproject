import Connect from "@/lib/dbconn";
import { Course } from "@/models/CourseModel";
import {NextResponse} from 'next/server'


export async function GET()
{

try {
    


await Connect() ; 
const d1 = await Course.find({category:"DATA SCIENCE"}) 
const d2 = await Course.find({category:"FULL STACK JAVA"}) 
const d3 = await Course.find({category:"APP DEVELOPMENT"}) 
const d4 = await Course.find({category:"FULL STACK WEB DEVELOPEMENT"}) 

return NextResponse.json({d1 : d1 , d2 :d2 , d3:d3 , d4:d4})



} catch (error) {

    return NextResponse.json({msg : "unsuccessfull"} );
}





}