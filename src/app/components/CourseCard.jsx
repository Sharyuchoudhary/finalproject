// CourseCard.jsx

"use client "
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const CourseCard = ({ _id, category, courseName, description, endDate, imageURL, instructor, startDate, subDescription ,price }) => {
  const cardStyles = {
    border: '1px solid #ccc',
    padding: '16px',
    marginBottom: '16px',
    position: 'relative',
  };

  const imageStyles = {
    maxWidth: '100%',
  };

  const buttonStyles = {
    backgroundColor: '#ff5a5f',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '8px',
    right: '8px',
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const [message, setMessage] = useState('');

  async function handleDeleteButton() {
    try {
      const toDeleteCourse = _id;

      const response = await fetch('/api/admin/deletecourse', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ CourseId: toDeleteCourse }),
      });

      if (response.ok) {
        const { message } = await response.json();
        setMessage(message);
      } else {
        console.log('Failed to delete course');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  }

  return (
    <>
      <Head>
        <title>{courseName} - Skillsail</title>
        <meta name="description" content={description} />
      </Head>

      <motion.div style={cardStyles} initial="hidden" animate="visible" variants={cardVariants}>
        <h2>{courseName}</h2>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}
        </p>
        <p>
          <strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Instructor:</strong> {instructor}
        </p>
        <p>
          <strong>Sub Description:</strong> {subDescription}
        </p>
        <p>
          <strong>PRICE:</strong> {price}
        </p>
        
        <button style={buttonStyles} onClick={handleDeleteButton}>
          Remove
        </button>
        <div style={{ color: 'green' }}>{message}</div>
      </motion.div>
    </>
  );
};

export default CourseCard;

