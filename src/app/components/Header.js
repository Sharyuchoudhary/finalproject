
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from 'src/app/styles/nav.module.css';

export default function Header() {
  const [isadmin, setisadmin] = useState(false);

  async function checkuser() {
    try {
      const response = await fetch('/api/users/me', {
        method: 'GET',
      });

      if (response.ok) {
        const responsedata = await response.json();
        console.log("the response data is", responsedata);

        const { user } = responsedata;

        if (user.isVerified === true) {
          setisadmin(true);
        }
      } else {
        console.log('BAD RESPONSE checkuser ROUTE!');
      }
    } catch (error) {
      console.error('Error checking user:', error);
    }
  }

  useEffect(() => {
    checkuser();
  }, []);

  const handlelogout = async () => {
    try {
      const response = await fetch('/api/users/logout', { method: 'GET' });

      if (response.status === 200) {
        window.location.href = '/LOGIN';
        console.log('Success Logout!');
      } else {
        console.log('BAD RESPONSE logout ROUTE!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = isadmin ? 'Admin Panel - Skillsail' : 'Skillsail - Online Courses Platform';
  }, [isadmin]);

  return (
    <>
      <Head>
        <meta name="description" content={`Explore ${isadmin ? 'admin panel' : 'online courses and blogs'} on Skillsail. Enhance your skills and knowledge with our high-quality courses.`} />
      </Head>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {!isadmin && <li><Link href="/courses">COURSES</Link></li>}
          {!isadmin && <li><Link href="/blog">BLOGS</Link></li>}
          {isadmin ? <li><Link href="/paneladmin">PANEL</Link></li> : <li><Link href="/contacts">CONTACT US</Link></li>}

          {isadmin ? (
            <li className={styles.dropdown}>
              <button className={styles.dropbtn}>ADMIN</button>
              <div className={styles.dropdownContent}>
                <Link href="" onClick={handlelogout}>Logout</Link>
              </div>
            </li>
          ) : (
            <li className={styles.dropdown}>
              <button className={styles.dropbtn}>PROFILE</button>
              <div className={styles.dropdownContent}>
                <Link href="/profiledashboard">View Profile</Link>
                <Link href="/yourcourses">Your Courses</Link>
                <Link href="/favcourse">Favorite Courses</Link>
                <Link href="" onClick={handlelogout}>Logout</Link>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
