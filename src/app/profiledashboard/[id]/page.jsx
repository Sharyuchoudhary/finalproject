'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profilepage({ params }) {
  const router = useRouter();
  const [responsedata, setResponsedata] = useState(null);

  const handlelogout = async () => {
    try {
      const response = await fetch('/api/users/logout', { method: 'GET' });

      if (response.status === 200) {
        router.push('/LOGIN');
        console.log('Success Logout!');
      } else {
        console.log('BAD RESPONSE logout ROUTE!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users/me', { method: 'GET' });
        const data = await response.json();
        console.log(data);
        setResponsedata(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#41b883', // MongoDB Atlas green
        fontFamily: 'Roboto, sans-serif',
        color: '#fff',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          width: '60%',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          background: '#ffffff', // MongoDB Atlas white
          marginBottom: '20px',
        }}
      >
        <h1
          style={{
            marginBottom: '20px',
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#41b883', // MongoDB Atlas green
          }}
        >
          WELCOME, {responsedata?.[0]?.username || 'User'}
        </h1>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px',
            color: '#41b883',
          }}
        >
          ID: {responsedata?.[0]?._id || 'N/A'}
        </p>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px',
            color: '#41b883',
          }}
        >
          Email: {responsedata?.[0]?.email || 'N/A'}
        </p>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px',
            color: '#41b883',
          }}
        >
          Number: {responsedata?.[0]?.number || 'N/A'}
        </p>
      </div>
      <button
        style={{
          padding: '15px',
          fontSize: '18px',
          background: '#3f6a8e', // MongoDB Atlas blue
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={handlelogout}
      >
        LOGOUT
      </button>
    </div>
  );
  
  
  
  
  
}
