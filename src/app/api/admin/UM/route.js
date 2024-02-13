import { NextResponse } from "next/server";
import { User } from "@/models/usermodel";
import Connect from "@/lib/dbconn";

export async function GET(request)
{

try {

await Connect() ; 

// const data = await User.find({isVerified:true}) ;
 const data = await User.find({}) ;

return NextResponse.json(data)
    
} catch (error) {
    return NextResponse.json({
        status: 500,
        message: "Internal Server Error",
        success: false,
    })
}









}