import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import { NextRequest , NextResponse } from "next/server";


Connect() ; 
export async function POST(request)
{

try {
    const reqbody = await request.json()
    const {token} = reqbody ; 
    console.log(token);

   const user =  await User.findOne({verifyToken:token , verifyTokenExpiry:{$gt:Date.now()}})

if(!user)
{
    return NextResponse.json({error:"Invalid token"} , {status :400})
}


user.isVerified = true ; 
user.verifyToken = undefined ; 
user.verifyTokenExpiry = undefined ; 
await user.save() ; 

return NextResponse.json({message :"Email verified successsfully !", success :true})

} catch (error) {
    console.log(error);
    return NextResponse.json(error)
}




} 