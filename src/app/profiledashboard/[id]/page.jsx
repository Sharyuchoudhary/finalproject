'use client'
import React from 'react';
import { useRouter } from 'next/navigation';


export default function Profilepage() {


  const router = useRouter();

  const handlelogout = async () => {
    try {
      const response = await fetch('/api/users/logout' ,{method:"GET"});
     
if(response.status === 200)
{
router.push('/LOGIN')
console.log("Success Logout !");
}
else
{

  console.log("BAD RESPONSE logout ROUTE !");
}


      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={handlelogout}>LOGOUT</button>
    </>
  );
}

