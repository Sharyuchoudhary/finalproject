'use client'

import React, { useState } from 'react'
import Coursemanagement from '../components/Coursemanagement'
import Usermanagement from '../components/Usermanagement'
export default function Adminpage() {


    const [usermanagement , Setusermanagement] = useState(false)
    const [coursemanagement, Setcoursemangament] = useState(false)
  
  
  
  
  
  
    return (
    <div>

<h1> Welcome Admin !</h1>

<div className='Maindiv-management'>
    <div onClick={()=>{
Setusermanagement(!usermanagement)
}} className="div">
        <h2>User Management</h2>
        <p>Content for div 1...</p>
    </div>

    <div onClick={()=>{
    Setcoursemangament(!coursemanagement)
}}  className="div">
        <h2>Div 2</h2>
        <p>Content for div 2...</p>
    </div>

    <div  className="div">
        <h2>Div 3</h2>
        <p>Content for div 3...</p>
    </div>
</div>

{usermanagement && <Usermanagement/>}


{coursemanagement && <Coursemanagement/>}





</div>
  )
}
