'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function Profiledashboard() {

  const router = useRouter() ; 


async function getuserdata()
{

  try {
    
    
const response  = await fetch ('/api/users/me' , { method:"GET" }) 

const responsedata  = await response.json();

if(response.status === 200)
{
  router.push(`/profiledashboard/${responsedata[0]._id}`)
}
   


  } catch (error) {
    console.log(error);
  }


}


useEffect(()=>{


getuserdata() ; 


} , [])

  return (
    <div>
    


  
    
    </div>
  )
}

