"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function UserCard({ user }) {

  const [message , Setmessage] = useState('');

  async function handledeltebutton() {
    try {
      const toDeleteUser = user._id;

      const response = await fetch('/api/admin/deleteuser', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: toDeleteUser }),
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
    <motion.div
      initial={{ opacity: 0, x: 50, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -50, y: -50 }}
      transition={{ duration: 0.5 }}
      drag // Enable dragging
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      style={userCardStyle}
    >
      <Helmet>
        <title>{user.username} Profile - Admin Dashboard - Skillsail</title>
        <meta name="description" content={`User ID: ${user._id}, Username: ${user.username}, Email: ${user.email}. Manage and delete user profiles in the Skillsail admin dashboard.`} />
      </Helmet>

      <p className="user-info">User ID: {user._id}</p>
      <p className="user-info">Username: {user.username}</p>
      <p className="user-info">Email: {user.email}</p>
      <p className="user-info">Number: {user.number}</p>
      <p className="user-info">Verified: {user.isVerified ? 'Yes' : 'No'}</p>
      <button onClick={handledeltebutton}>Remove</button>
      {message}
    </motion.div>
  );
}

const userCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  background: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  fontFamily: 'Roboto, sans-serif', // Roboto Bold font
  fontWeight: 'bold', // Apply bold font
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#333',
};

export default UserCard;
