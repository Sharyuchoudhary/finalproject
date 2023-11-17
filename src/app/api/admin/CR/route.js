import Connect from "@/lib/dbconn";
import { NextResponse } from "next/server";
import Course from "@/models/CourseModel";

export async function POST(req) {
  try {
    await Connect();

      const { courseName, instructor, startDate, endDate, description} = await req.json();
      

      const capitalizedCourseName = courseName.toUpperCase();
      const capitalizedInstructor = instructor.toUpperCase() ;

      await Course.create({
        courseName: capitalizedCourseName,
        instructor: capitalizedInstructor,
        startDate,
        endDate,
        description,
        
      });

      return NextResponse.json({
        status: 201,
        message: "Course Registered Successfully!",
        success: true,
      });


    }
   catch (error) {
    console.error(error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      success: false,
    });
  }
}
