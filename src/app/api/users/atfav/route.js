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

const condition =await user.clickedIds.includes(value)
console.log(condition);

if(!condition){

    user.clickedIds.push(value);
    console.log(condition);
    console.log(value);
    await user.save();
    return NextResponse.json({msg : "SUCCESS ATFAV"})

}
else 
{

    return NextResponse.json({msg :  "already LIKED"})
}


} catch (error) {
    console.log(error);
    return NextResponse.json({msg : "UNSUCCESS ATFAV"})
}
}



export async function GET(request) {
    try {
      
        await Connect();

        const userId = await getdatafromtoken(request);

        const user = await User.findOne({ _id: userId });

        if (user) {
          
            const courses = await Course.find({ _id: { $in: user.clickedIds } });
            return NextResponse.json({ favoriteCourses: courses });
        } else {
            return NextResponse.json({ msg: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ msg: "Error fetching data" });
    }
}
