 'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "src/app/styles/nav.module.css";
import { useRouter } from 'next/navigation';

export default function Header() {
const router = useRouter();

  const [isadmin, setisadmin] = useState(false);

  async function checkuser() {
    const response = await fetch('/api/users/me', {
      method: 'GET',
    });

    const responsedata = await response.json();
 
    if (responsedata[0].isAdmin) {
      setisadmin(true);
    }
  }

  useEffect(() => {
    checkuser();
  }, []);


  
  const handlelogout = async () => {
    try {
      const response = await fetch('/api/users/logout', { method: 'GET' });

      if (response.status === 200) {
        router.push('/LOGIN');
        console.log('Success Logout!');
      } else {
        console.log('BAD RESPONSE logout ROUTE!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>



        { isadmin ? "" :<li><Link href="/courses">COURSES</Link></li>}

        { isadmin ? "" :<li><Link href="/blog">BLOGS</Link></li>}

         { isadmin ? <li><Link href="/paneladmin">PANEL</Link></li> :<li><Link href="/contacts">CONTACT US</Link></li>}

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
  );
}
