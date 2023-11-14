
import { NextResponse } from "next/server";

export async function GET() {
  try {
       
   const response =  NextResponse.json({message:"LOGOUT SUCCESS !" , success:true , }) ; 
   response.cookies.set('token' , "" , {httpOnly:true , expires: new Date(0)})

    return response ; 
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
