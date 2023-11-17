'use client'
import React, { useState } from 'react';

export default function CourseManagement() {

  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    courseName: '',
    instructor: '',
    startDate: '',
    endDate: '',
    description: '',

  });

  const handleInputChange = (event) => {
    const { name, value} = event.target;

  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

     

       
      const responsedata = await response.json();
  
       const {status , message , success} = responsedata ; 

       setMessage(message)

      // Reset the form after successful submission
      setFormData({
        courseName: '',
        instructor: '',
        startDate: '',
        endDate: '',
        description: '',
  
      });
    } catch (error) {
      console.error('Error during fetch:', error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div>
      <h1>Course Registration</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="instructor">Instructor:</label>
        <input
          type="text"
          id="instructor"
          name="instructor"
          value={formData.instructor}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />

       
        {message}
        <button type="submit">Register Course</button>
      </form>
    </div>
  );
}
