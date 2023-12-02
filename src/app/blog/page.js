'use client'


import { useState , useEffect } from "react";
import styles from "@/app/styles/common.module.css"


export default function page() {

const [dataresponse , setdataresponse] = useState([])
useEffect (()=>{

 async function getblogdata()
{

const response = await fetch('/api/admin/createblog' , 
{
  method:"GET" ,
}); 
const res = await response.json();
console.log(res.data);
setdataresponse(res.data) ; 
}

getblogdata();

} , []) ;  



  return (
    <div className={styles.blogdiv}>

<h2>SKILLSAIL BLOGS</h2>
{

dataresponse.map((item)=>{

 return <div className={styles.md} key={item.id}>

<div className={styles.md1}><p>TITLE</p>{item.title} </div>

<div className={styles.md2}><p>CONTENT </p>{item.content}</div>



 </div>


})
}
    </div>
  )
}

