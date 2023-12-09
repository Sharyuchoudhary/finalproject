'use client'
import UserCard from "@/app/components/UserCard";
import { useEffect, useState } from "react";

export default function Userm() {
  const [data, Setdata] = useState();

  async function fetchdata() {
    try {
      const response = await fetch('/api/admin/UM', { method: 'GET' });

      if (response.ok) {
        const responsedata = await response.json();
        Setdata(responsedata);
      } else {
        console.log('Response Not Okay!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  
  return (
    <div>
      <h1> User Management </h1>
      <h4>Total Users : {data && data.length}</h4>
      {data &&
        data.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
    </div>
  );
}
