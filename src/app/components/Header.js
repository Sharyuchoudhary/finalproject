
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from 'src/app/styles/nav.module.css';
import { useRouter } from 'next/navigation';

export default function Header() {

  const router = useRouter()
  const [isadmin, setisadmin] = useState(false);

  async function checkuser() {
    try {
      const response = await fetch('/api/users/me', {
        method: 'GET',
      });

      if (response.ok) {
        const responsedata = await response.json();
      

        const { user } = responsedata;
       

        if (user.isAdmin === true) {
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
        try{router.push("/") }
       catch(error){
         console.log("error" , error)
       } 
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
          {!isadmin && <li><Link  className={styles.navbut} href="/courses">COURSES</Link></li>}
          {!isadmin && <li><Link className={styles.navbut} href="/blog">BLOGS</Link></li>}
          {isadmin ? <li><Link href="/paneladmin">PANEL</Link></li> : null }
 
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
                <Link href="/yourcourses">Cart</Link>
                <Link href="/favcourse">Liked Courses</Link>
                <Link href="" onClick={handlelogout}>Logout</Link>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
