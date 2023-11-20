
import { NextResponse } from "next/server";
import { Course } from "@/models/CourseModel";

export async function DELETE(request) {
 
 

  try {
    const { CourseId } = await request.json();

    

    const deletedCourse = await Course.findByIdAndDelete(CourseId);

    if (!deletedCourse) {
      return NextResponse.json({message:"UNSUCCESSFULL",})
    }
   


    return  NextResponse.json({message:"DELETE SUCCESSFULL",})
  } catch (error) {
    console.log("Error deleting user:", error);
    return NextResponse.json({message:"Internal Server Error"})
  }
}
