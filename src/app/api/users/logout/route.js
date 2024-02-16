
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET() {
  try {
 
   const response =  NextResponse.json({message:"LOGOUT SUCCESS !" , success:true , }) ; 
   cookies().delete('token')
  //  response.cookies.set('token' , "" , {httpOnly:true , expires: new Date(0)})

    return response ; 
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
