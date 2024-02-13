

import React from 'react';
import Link from 'next/link';
import styles from "/src/app/failure/page.module.css"; // Import CSS module


const FailurePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.failureMessage}>
        <h1 className={styles.heading}>Payment Failed</h1>
        <p className={styles.paragraph}>
          Oops! It seems there was an issue processing your payment. Please try
          again or contact support for assistance.
        </p>
        <Link href="/yourcourses">
          <button className={styles.button}>Retry Payment</button>
        </Link>
        <Link href="/contact">
          <button className={styles.button} >Contact Support</button>
        </Link>
      </div>
    </div>
  );
};

export default FailurePage;
