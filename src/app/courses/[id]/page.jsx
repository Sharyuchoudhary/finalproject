  'use client'

  import { useEffect, useState } from "react";
  import Image from "next/image";
  import s from "@/app/styles/s.module.css";
  import Link from "next/link"












  export default function CoursePage({ params }) {
    
    let msg1 = "COURSE SUCCESSFULLY ADDED"
    const { id } = params;

  
    const [course, setCourse] = useState(null);
    const [msg, setmsg] = useState("");

    
    async function getCourseInfo(id) {
      try {
        const response = await fetch(`/api/users/getcourseinfo?id=${id}`, {
          method: "GET",
        });

        const  {data}  = await response.json();

        if(data)
        {
        setCourse(data);
     
        }
  else{
    alert("no data")
  }
        
        
      } catch (error) {
        console.error(error);
      }
    }

    




  
    useEffect(() => {
      getCourseInfo(id);
    }, [id]);


    async function addtocart(value)
    {
    
    const response = await fetch('/api/users/atcart' , 
    {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({value}),
    });

    }
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
            <p>Price: {course.price}</p>

          
            <Image src={"/sc.png"} width={40} height={40} alt="Course Logo" onClick={() => {
    addtocart(course._id);
    setmsg(msg1); 
}} />
            <p>{msg}</p>
          </>
        )}
      </div>
      </div>);
  }
