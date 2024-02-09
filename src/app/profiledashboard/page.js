'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function Profiledashboard() {
  const router = useRouter();

  async function getuserdata() {
    try {
      const response = await fetch('/api/users/me', { method: 'GET' });
      const responsedata = await response.json();
      const { user } = responsedata;

      if (response.status === 200) {
        router.push(`/profiledashboard/${user._id}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getuserdata();
  }, []);

  return (
    <>
      <Head>
        <title>Profile Dashboard - Skillsail</title>
        <meta
          name="description"
          content="Explore your profile dashboard on Skillsail. View and manage your profile information, courses, and more."
        />
      </Head>

      <div>
        {/* Your existing component content */}
      </div>
    </>
  );
}
