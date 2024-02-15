// pages/favcourse.js

'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import s from "@/app/styles/s.module.css"
import Image from 'next/image';
import Link from 'next/link';

const FavCoursePage = ({ name }) => {
  const [favCourses, setFavCourses] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('/api/users/atfav', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setFavCourses(data.favoriteCourses);
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

  async function deleteFavCourse(id) {
    try {
      const response = await fetch('/api/users/atfav', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });

      if (response.ok) {
        fetchData();
      } else {
        console.error('Failed to delete favorite course.');
      }
    } catch (error) {
      console.error('Error deleting favorite course:', error);
    }
  }

  return (
    <div className={s.maindivv}>
      <Head>
        <title>{name} Favorite Courses - Skillsail</title>
        <meta name="description" content={`Explore and manage your favorite courses on Skillsail. View course details and remove courses from your favorites.`} />
      </Head>

      <div className={s.hh}>
        <h1> LIKED COURSES</h1>
        <hr/>
        <Link href="/courses">
          <Image className={s.ii} src={"/hh.png"} width={30} height={30} alt='back to courses' />
        </Link> 
      </div>

<div className={s.cdivv}>
      {favCourses.map((course) => (
        <div className={s.cdiv} key={course._id}>
          <div className={s.cn}>
            <h4>{course.courseName}</h4>
          </div>

          <p>DURATION</p>
          <p>{new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}</p>
          <p>{course.subDescription}</p>
          <hr/>
          <p>Instructor: {course.instructor}</p>

          <Image src={"/react.png"} width={50} height={50} alt="React Logo" />

          <div className={s.del}>
            <Image src={'/t.png'} width={20} height={20} alt="Delete Icon" onClick={() => deleteFavCourse(course._id)} />
          </div>
        </div>
      ))}

</div>


    </div>
  );
};

export default FavCoursePage;
