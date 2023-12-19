 'use client'

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Welcomeuser from '../components/Welcomeuser';
import styles from "src/app/styles/coursecard.module.css"

export default function CoursePage() {
  const [name, setname] = useState('');
  const [array, setarray] = useState([]);
  const [stateD1, setStateD1] = useState([]);
  const [stateD2, setStateD2] = useState([]);
  const [stateD3, setStateD3] = useState([]);
  const [stateD4, setStateD4] = useState([]);

  async function checkuser() {
    try {
      const response = await fetch('/api/users/me', {
        method: 'GET',
      });

      const responsedata = await response.json();

      setname(responsedata[0].username);
    } catch (error) {
      console.log(error);
    }
  }

  async function popularcourses() {
    try {
      const response = await fetch('/api/users/pc', {
        method: 'GET',
      });

      const rd = await response.json();
      const { courses } = rd;
      setarray(courses);
    } catch (error) {
      console.log(error);
    }
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
async function getcoursesdata(){

  try {
    const response = await fetch('/api/users/allcourses', {
      method: 'GET',
    });

    const data = await response.json();
   const {d1 , d2 , d3 , d4} = data ; 
   setStateD1(d1)
   setStateD2(d2)
   setStateD3(d3)
   setStateD4(d4)
    
  } catch (error) {
    console.log(error);
  }





}



async function addtofav(value)
{

const response = await fetch('/api/users/atfav' , 
{
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({value}),
});





}




  useEffect(() => {
    checkuser();
    getcoursesdata(); 
    popularcourses();
   

  }, []);

 
  
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed in milliseconds
  };

  const settings1 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed in milliseconds
  };
  
  
  return (
    <div>
      <Welcomeuser username={name} />

<div className={styles.sdiv}>
<h1>POPULAR COURSES</h1>
<Slider {...settings}>
        {array.map((course, index) => (

          <div key={index} className={styles.maindiv}>
            <h4>{course.courseName}</h4>
            <p>Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(course.endDate).toLocaleDateString()}</p>
            <p>{course.subDescription}</p>
            <p>Instructor: {course.instructor}</p>
            <button  onClick={() => addtofav(course._id)}>LIKE</button>
          </div>
        ))}
      </Slider>

</div>
      
<div className={styles.sdiv}>
<h1>APP DEVELOPEMENT</h1>
  <Slider {...settings1}>
        {stateD3.map((course) => (

          <div key={course._id} className={styles.maindiv}>
            <h4>{course.courseName}</h4>
            <p>Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(course.endDate).toLocaleDateString()}</p>
            <p>{course.subDescription}</p>
            <p>Instructor: {course.instructor}</p>
            <button  onClick={() => addtofav(course._id)}>LIKE</button>
          </div>
        ))}
      </Slider>
 



</div>



    
<div className={styles.sdiv}>
<h1> DATA SCIENCE </h1>
  <Slider {...settings1}>
        {stateD1.map((course) => (

          <div key={course._id} className={styles.maindiv}>
            <h4>{course.courseName}</h4>
            <p>Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(course.endDate).toLocaleDateString()}</p>
            <p>{course.subDescription}</p>
            <p>Instructor: {course.instructor}</p>
            <button  onClick={() => addtofav(course._id)}>LIKE</button>
          </div>
        ))}
      </Slider>
 



</div>


    
<div className={styles.sdiv}>
<h1>FULL STACK WEBDEVELOPEMENT</h1>
  <Slider {...settings1}>
        {stateD4.map((course) => (

          <div key={course._id} className={styles.maindiv}>
            <h4>{course.courseName}</h4>
            <p>Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(course.endDate).toLocaleDateString()}</p>
            <p>{course.subDescription}</p>
            <p>Instructor: {course.instructor}</p>
            <button  onClick={() => addtofav(course._id)}>LIKE</button>
          </div>
        ))}
      </Slider>
 



</div>


    
<div className={styles.sdiv}>
<h1>FULL STACK JAVA</h1>
  <Slider {...settings1}>
        {stateD2.map((course) => (

          <div key={course._id} className={styles.maindiv}>
            <h4>{course.courseName}</h4>
            <p>Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(course.endDate).toLocaleDateString()}</p>
            <p>{course.subDescription}</p>
            <p>Instructor: {course.instructor}</p>
            <button  onClick={() => addtofav(course._id)}>LIKE</button>
          </div>
        ))}
      </Slider>
 



</div>




    </div>
  );
}
