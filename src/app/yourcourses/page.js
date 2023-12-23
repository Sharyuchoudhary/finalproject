// pages/favcourse.js

'use client'

import { useEffect, useState } from 'react';
import s from "@/app/styles/s.module.css"
import Image from 'next/image';
import Link from 'next/link'

const FavCartPage = ({ name }) => {
  const [favCourses, setFavCourses] = useState([]);
const [bill , setbill] = useState(0)
  async function fetchData() {
    try {
      const response = await fetch('/api/users/atcart', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
      console.log(data);
      setbill(data.total)
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

  async function deleteFavCourse(id) {
    try {
      const response = await fetch('/api/users/atcart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });
      
  
      if (response.ok) {
        console.log('Favorite course deleted successfully.');
        // Update the state or fetch favorite courses again if needed
        fetchData();
      } else {
        console.error('Failed to delete favorite course.');
      }
    } catch (error) {
      console.error('Error deleting favorite course:', error);
    }
  }
  






  return (

    
    <div className={s.maindiv} >
   
     <div className={s.h}> <h1>Your CART Courses</h1> <hr/>
     
    <Link href="/courses"><Image className={s.i} src={"/hh.png"} width={30} height={30} alt='delet text' />
     </Link> 
     </div>
   
      
        {favCourses.map((course) =>{

return <div className={s.cdiv} key={course._id}>

<div className={s.cn}>  <h4>{course.courseName}</h4></div>
<div className={s.cn}>  <h4>{course. instructor}</h4></div>
<div className={s.cn}>  <h4>{course.price}</h4></div>
<div className={s.del}> 
<Image src={'/t.png'} width={20} height={20} alt="Delete Icon" onClick={() => deleteFavCourse(course._id)} />
 </div>
</div>

 })}


      <div className={s.cn}> <h4>TOTAL PRICE TO PAY </h4>
      <h4> BILL : $ {bill} </h4></div>
    </div>
    
  );
 
};

export default FavCartPage;
