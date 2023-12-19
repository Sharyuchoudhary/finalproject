// pages/favcourse.js

'use client'

import { useEffect, useState } from 'react';
import s from "@/app/styles/s.module.css"
import Image from 'next/image';

const FavCoursePage = ({ name }) => {
  const [favCourses, setFavCourses] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('/api/users/atfav', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFavCourses(data.favoriteCourses); // Update state with favoriteCourses
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (

    
    <div className={s.maindiv} >
     <div className={s.h}> <h1>Your Favorite Courses</h1> <hr/></div>
   
      
        {favCourses.map((course) =>{

return <div className={s.cdiv} key={course._id}>

<div className={s.cn}>  <h4>{course.courseName}</h4></div>

            <p>DURATION</p>
            <p> {new Date(course.startDate).toLocaleDateString() } - {new Date(course.endDate).toLocaleDateString()} </p>
            <p>{course.subDescription}</p>
            <hr/>
            <p>Instructor: {course.instructor}</p>
      
<Image src={"/react.png"} width={50} height={50} alt="React Logo" />


</div>


        })}
      
    </div>
    
  );
 
};

export default FavCoursePage;
