// route.js file

import { NextResponse } from "next/server";
import { User } from "@/models/usermodel";
import Connect from "@/lib/dbconn";

export async function DELETE(request) {
 
 

  try {
    const { userId } = await request.json();

    

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return NextResponse.json({message:"UNSUCCESSFULL",})
    }
   


    return  NextResponse.json({message:"DELETE SUCCESSFULL",})
  } catch (error) {
    console.log("Error deleting user:", error);
    return NextResponse.json({message:"Internal Server Error"})
  }
}
