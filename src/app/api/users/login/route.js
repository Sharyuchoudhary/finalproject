import Connect from "@/lib/dbconn";
import { User } from "@/models/usermodel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import  jwt  from "jsonwebtoken";

export async function POST(request)
{

try {

const {email , password} = await request.json() ; 

await Connect() ; 

const user = await User.findOne({email}) ;

if(!user)
{
    return NextResponse.json({ 
    status:400 , 
    message:"NO USER FOUND WITH THIS EMAIL !" , 
    success:false , })
}

 const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      console.log("Invalid password");
      return NextResponse.json({  status: 400 , message : "Invalid password" , success:false });
    } else {
      console.log("Password is valid");
    }



    // Generate a JWT with a hardcoded secret key
    const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email,
      };
      
      const token = jwt.sign(tokenData, 'finalproject', { expiresIn: "1d" });
      




    return NextResponse.json({

    status:200 , 
    message:"Login Success !" , 
    success:true , 
    token : token ,
})


    
} catch (error) {

    return NextResponse.json({


        status:400 , 
    message:"Login Failed" , 
    success:false , 


    })
}








}
