'use client' 
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from "next/link"

export default function Homepage() {
  const [User, setUser] = useState({ username: '', number: '', email: '', password: '' });
  const [passwordError, setPasswordError] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [evm , setevm] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  useEffect(() => {
    if (User.password.length < 6 && User.password.length > 0) {
      setPasswordError('The Password Should Be At Least 6 Characters Long');
      setButtonDisabled(true);
    } 
    else {
      setPasswordError('');
      setButtonDisabled(false);
    }
  }, [User.password]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(User),
      });

      const data = await response.json();
   
      if (data.success) {
        setPasswordError('');
        setServerMessage(data.message);
        setevm(true)
        router.push('/LOGIN')
        
      } else {
        setServerMessage(data.message);
      }
    } catch (error) {
      console.error('User Registration Failed ', error);
    }
  };


  return (
    <div className={styles.body}>

<Head>
        <title>Sign Up - Your Website Name</title>
        <meta
          name="description"
          content="Sign up for an account at Your Website Name and start your learning journey. Register with your full name, phone number, email, and password."
        />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>SIGN UP</h1>
        <input
          className={styles.input}
          name="username"
          type="text"
          value={User.username}
          placeholder="FullName"
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name="number"
          type="text"
          value={User.number}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name="email"
          type="email"
          value={User.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name="password"
          type="password"
          value={User.password}
          placeholder="Password"
          onChange={handleChange}
        />
        {passwordError && <p className={styles.error}>{passwordError}</p>}
        {serverMessage && <p className={styles.error}>{serverMessage}</p>}
        {evm && <p className={styles.error}>Check Email for Verification and Login!</p>}

<div className={styles.divdiv}>   <button
          className={buttonDisabled ? styles.buttonDisabled : styles.button}
          onClick={handleSubmit}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? 'NO SIGNUP' : 'SIGNUP'}

        </button>

        <button className={buttonDisabled ? styles.buttonDisabled : styles.button}>
  <Link className={styles.link} href="/LOGIN">
    LOGIN
  </Link>
</button> </div>

      
      </div>	



      
    </div>
  );
}
