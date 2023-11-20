'use client'
import React, { useEffect, useState } from 'react';
import CourseCard from '@/app/components/CourseCard';

export default function Page() {
  const [c, setC] = useState('');
  const [data, setData] = useState([]);

  const handleButtonClick = (courseName) => {
    // Set the clicked course name in the state 'c'
    setC(courseName);
  };

  async function handleSubmit() {
    try {
      const response = await fetch('/api/admin/vc', {
        method: 'POST', // Change to POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ c }),
      });

      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  }

  useEffect(() => {
    handleSubmit();
  }, [c]);

  return (
    <div style={pageStyle}>
      <button
        onClick={() => handleButtonClick('DATA SCIENCE')}
        style={buttonStyle}
      >
        Data Science
      </button>
      <button
        onClick={() => handleButtonClick('FULL STACK JAVA')}
        style={buttonStyle}
      >
        Full Stack Java
      </button>
      <button
        onClick={() => handleButtonClick('FULL STACK WEB DEVELOPEMENT')}
        style={buttonStyle}
      >
        Full Stack Web Development
      </button>
      <button
        onClick={() => handleButtonClick('FULL STACK APP DEVELOPEMENT')}
        style={buttonStyle}
      >
        App Development
      </button>

      <p style={selectedCourseStyle}>Selected Course: {c}</p>

      {data.map((courseData, index) => (
        <CourseCard key={index} {...courseData} />
      ))}

      
    </div>
  );
}

const pageStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
};

const buttonStyle = {
  marginRight: '10px',
  backgroundColor: 'lightblue',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const selectedCourseStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginTop: '10px',
};

const submitButtonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};
