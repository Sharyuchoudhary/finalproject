'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profilepage({ params }) {
  const router = useRouter();
  const [responsedata, setResponsedata] = useState(null);

  
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
      
    </div>
  );
  
  
  
  
  
}
