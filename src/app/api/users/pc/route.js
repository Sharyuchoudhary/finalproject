import Connect from '@/lib/dbconn';
import { Course } from '@/models/CourseModel';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Ensure a MongoDB connection is established
    await Connect();

    // Fetch courses from the database
    const courses = await Course.find({});
    

    // Convert the courses to a plain JavaScript array
    const coursesArray = courses.map(course => course.toJSON());

    // Return the response with the list of courses
    return NextResponse.json({ courses: coursesArray });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'unsuccessful' });
  }
}
