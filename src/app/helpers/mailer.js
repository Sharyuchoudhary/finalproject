import nodemailer from 'nodemailer'
import { User } from '@/models/usermodel'
import bcryptjs from 'bcryptjs'
import { NextResponse } from 'next/server'
import Connect from '@/lib/dbconn'

export async function sendemail(email , emailtype , UserID)
{


try {
    
await Connect() ; 

const hashedToken = await bcryptjs.hash(UserID.toString() , 10)

if (emailtype ==="VERIFY") {
    
    await User.findByIdAndUpdate(UserID , {verifyToken:hashedToken , verifyTokenExpiry:Date.now()+360000  })


} else if (emailtype === "RESET") {
    
    await User.findByIdAndUpdate(UserID , {forgotPasswordToken:hashedToken , forgotPasswordTokenExpiry:Date.now()+360000  })

}


var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3cb419802de517",
      pass: "cc5aaf687feff0"
    }
  });


    const mailOptions = {
        from:'kp@gmail.com',
        to: email,
        subject: emailtype === "VERIFY" ? "Verify your email" : "Reset your password",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f2f2f2; border-radius: 8px;">
          <p style="font-size: 18px; color: #333; margin-bottom: 20px;">
            Click <a href="http://localhost:3000/verifyemail?token=${hashedToken}" style="color: #007bff; text-decoration: none; font-weight: bold;">here</a> to ${
        emailtype === 'VERIFY' ? 'verify your email' : 'reset your password'
      } or copy and paste the link below in your browser.
          </p>
          <p style="font-size: 16px; color: #555; margin: 10px 0;">
            http://localhost:3000/verifyemail?token=${hashedToken}
          </p>
        </div>
      `,
    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;

} catch (error) {
console.log(error);
    return NextResponse.json({status:400 , message:"Email verification failed !" , success : false})
    
}








}