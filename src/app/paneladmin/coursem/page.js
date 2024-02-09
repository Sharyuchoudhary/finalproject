
'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
export default function CourseManagement() {
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    courseName: '',
    instructor: '',
    startDate: '',
    endDate: '',
    description: '',
    subDescription: '',
    price:'' ,
    category: '',
     
  });

  const [categoryOptions, setCategoryOptions] = useState([
    'DATA SCIENCE',
    'FULL STACK JAVA',
    'FULL STACK WEB DEVELOPEMENT',
    'FULL STACK APP DEVELOPEMENT',
  ]);

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    marginBottom: '8px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const messageStyle = {
    marginTop: '16px',
    color: '#4caf50',
    fontWeight: 'bold',
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'category') {
      setCategoryOptionsVisible(true);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategorySelect = (selectedCategory) => {
    setFormData({
      ...formData,
      category: selectedCategory,
    });

    setCategoryOptionsVisible(false);
  };

  const [categoryOptionsVisible, setCategoryOptionsVisible] = useState(false);

  const handleFormSubmit = async (event) => {
  
    event.preventDefault();

    try {
      const response = await fetch('/api/admin/CR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      const { status, message, success } = responseData;

      setMessage(message);

      // Reset the form after successful submission
      if (success) {
        setFormData({
          courseName: '',
          instructor: '',
          startDate: '',
          endDate: '',
          description: '',
          subDescription: '',
          price:'' ,
          category: '',
           
        });
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div style={containerStyle}>

<Head>
        <title>Course Management - Skillsail</title>
        <meta
          name="description"
          content="Register new courses on Skillsail. Manage course details and categories for online learning."
        />
      </Head>
      <h1 style={{ textAlign: 'center' }}>Course Registration</h1>
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="courseName" style={labelStyle}>
          Course Name:
        </label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />

        <label htmlFor="instructor" style={labelStyle}>
          Instructor:
        </label>
        <input
          type="text"
          id="instructor"
          name="instructor"
          value={formData.instructor}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />

        <label htmlFor="startDate" style={labelStyle}>
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />

        <label htmlFor="endDate" style={labelStyle}>
          End Date:
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />

        <label htmlFor="description" style={labelStyle}>
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />

        <label htmlFor="subDescription" style={labelStyle}>
          Sub-Description:
        </label>
        <input
          type="text"
          id="subDescription"
          name="subDescription"
          value={formData.subDescription}
          onChange={handleInputChange}
          style={inputStyle}
        />

        
<label htmlFor="price" style={labelStyle}>
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
    
          style={inputStyle}
        />

        <label htmlFor="category" style={labelStyle}>
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          onFocus={() => setCategoryOptionsVisible(true)}
          style={inputStyle}
        />



        {categoryOptionsVisible && (
          <ul>
            {categoryOptions.map((option) => (
              <li key={option} onClick={() => handleCategorySelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}

        {message && <div style={messageStyle}>{message}</div>}
        <button type="submit" style={buttonStyle}>
          Register Course
        </button>
      </form>


      <Link href="/paneladmin/coursem/viewcourses">VIEW COURSES</Link>
    </div>
  );
}
