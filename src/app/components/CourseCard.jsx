// CourseCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ _id, category, courseName, description, endDate, imageURL, instructor, startDate, subDescription }) => {
  const cardStyles = {
    border: '1px solid #ccc',
    padding: '16px',
    marginBottom: '16px',
    position: 'relative', // Added position relative for button positioning
  };

  const imageStyles = {
    maxWidth: '100%',
  };

  const buttonStyles = {
    backgroundColor: '#ff5a5f', // Cute red color
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

  const [message, Setmessage] = useState('');

  async function handledeltebutton() {
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
        Setmessage(message);
      } else {
        console.log('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  return (
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
      <motion.img src={imageURL} alt={courseName} style={imageStyles} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      <button style={buttonStyles} onClick={handledeltebutton}>
        Remove
      </button>
      <div style={{ color: 'green' }}>{message}</div>
    </motion.div>
  );
};

export default CourseCard;
