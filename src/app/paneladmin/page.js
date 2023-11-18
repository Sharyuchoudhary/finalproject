'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Adminpage() {

const router = useRouter() ; 

    return (
    <div>

<h1> Welcome Admin !</h1>

<div  className='Maindiv-management'>
    <div onClick={()=>{router.push('/paneladmin/userm')}} className="div">
        <h2>User Management</h2>
      
    </div>

    <div onClick={()=>{router.push('/paneladmin/coursem')}} className="div">
        <h2>Course Management</h2>
      
    </div>

    <div  className="div">
        <h2>Div 3</h2>
        <p>Content for div 3...</p>
    </div>
</div>






</div>
  )
}
