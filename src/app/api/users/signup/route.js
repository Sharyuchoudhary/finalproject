import { User } from "@/models/usermodel";
import Connect from "@/lib/dbconn";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs" ;
import { sendemail } from "@/app/helpers/mailer";


export async function POST(request)
{



try {
await Connect() 
const {username , number , email , password} = await request.json() ; 

const existinguser =await User.findOne({$or:[{ email }, { username }]}) 

if (existinguser) {
    
if (existinguser.email === email) {
    
    return NextResponse.json({
        status: 400,
        message: "Email already in use. Please use another email.",
        success: false,
      });

}
else if (existinguser.username ===username)
{

    return NextResponse.json({
        status: 400,
        message: "Username already in use. Please use another Username.",
        success: false,
      });


}


}



const hashedpassword = await bcryptjs.hash(password , 10)

const SavedUser = await User.create({
 username ,
 number , 
 email , 
 password:hashedpassword , 
})



// if (SavedUser) {

//   await sendemail(email ,"VERIFY", SavedUser._id)
// }

// else 
// {

// log("Email Couldn't be send !")
// }


return NextResponse.json({

status :200 , 
message : "User Successfully Signed Up !" ,
success: true , 



})


    
} catch (error) {
    console.log("ROUTE ERROR !" , error);
    return NextResponse.json({
        status: 500,
        message: "Internal Server Error",
        success: false,
      });
}





}