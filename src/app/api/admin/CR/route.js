// Import necessary modules
import Connect from "@/lib/dbconn";
import { NextResponse } from "next/server";
import {Course} from "@/models/CourseModel";

export async function POST(req) {
  try {
    // Connect to the database
    await Connect();

    // Extract course data from the request body
    const {
      courseName,
      instructor,
      startDate,
      endDate,
      description,
      subDescription, // Add subDescription
      price ,
      category, // Add category
     
    } = await req.json();

   

    // Capitalize course name and instructor
    const capitalizedCourseName = courseName.toUpperCase();
    const capitalizedInstructor = instructor.toUpperCase();

    // Create a new course with the provided data
    await Course.create({
      courseName: capitalizedCourseName,
      instructor: capitalizedInstructor,
      startDate,
      endDate,
      description, 
      imageURL: "D:/2023-10-31 bday akola/bday akola 002.JPG", 
      subDescription ,
      price ,  
      category ,
     
      
      
    });

    // Return a JSON response indicating success
    return NextResponse.json({
      status: 201,
      message: "Course Registered Successfully!",
      success: true,
    });
  } catch (error) {
    // Log and return an error response in case of an exception
    console.error(error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      success: false,
    });
  }
}



