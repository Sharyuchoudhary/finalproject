import React from 'react';
import Head from 'next/head';
import Herosection from '../components/Herosection';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UserHomepage() {
  return (
    <>
      <Head>
        <title>SkillSail - Embark on a Learning Odyssey</title>
        <meta
          name="description"
          content="Navigate your personal journey to success with SkillSail's compassionate guidance and expert courses."
        />
      </Head>

      <Header />
      <Herosection
        url={'/unity.png'}
        title={'SkillSail'}
        content={
          "Embark on a Learning Odyssey: Navigate Your Personal Journey to Success with SkillSail's Compassionate Guidance and Expert Courses"
        }
      />
      <Footer />
    </>
  );
}
