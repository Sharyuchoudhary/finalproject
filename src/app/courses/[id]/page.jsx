'use client'
// Import necessary dependencies
import { useEffect, useState } from "react";
import Image from "next/image"; // Replace "your-image-library" with the actual library you are using
import s from "@/app/styles/s.module.css"; // Replace "your-styles-file.module.css" with your actual styles file
import Link from "next/link"
// Functional component definition
export default function CoursePage({ params }) {
  // Destructure id from params
  const { id } = params;

  // State to store course data
  const [course, setCourse] = useState(null);

  // Function to fetch course information
  async function getCourseInfo(courseId) {
    try {
      const response = await fetch(`/api/users/getcourseinfo?id=${courseId}`, {
        method: "GET",
      });

      const { data } = await response.json();
      setCourse(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect to fetch course information on component mount
  useEffect(() => {
    getCourseInfo(id);
  }, [id]); // Include id as a dependency to re-run the effect when id changes

  // Render the component
  return (<div className={s.ssdiv}>

    <div className={s.hh}> 
     <Link href="/courses"><Image className={s.i} src={"/hh.png"} width={30} height={30} alt='delet text' />
      </Link> 
      </div>
    <div className={s.cdiv} key={course?._id}>
     
      {course && (
        <>
          <div className={s.cn}>
            <h4>{course.courseName}</h4>
          </div>

          <p>DURATION</p>
          <p>
            {new Date(course.startDate).toLocaleDateString()} -{" "}
            {new Date(course.endDate).toLocaleDateString()}
          </p>
          <p>{course.subDescription}</p>
          <p>{course.description}</p>
          <hr />
          <p>Instructor: {course.instructor}</p>

          {/* Assuming course has an image property */}
          <Image src={"/react.png"} width={50} height={50} alt="Course Logo" />
        </>
      )}
    </div>
    </div>);
}
