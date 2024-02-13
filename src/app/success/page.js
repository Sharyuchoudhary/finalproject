// pages/success.js

import React from 'react';
import styles from "@/app/success/page.module.css" // Import CSS module
import Link from 'next/link'

const SuccessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.successMessage}>
        <h1 className={styles.heading}>Payment Successful!</h1>
        <p className={styles.paragraph}>
          Thank you for your purchase. Your payment was successful.
        </p>
      
        <Link href="/courses">
        <button className={styles.button}>Continue Shopping</button>
        </Link>

        
      </div>
    </div>
  );
};

export default SuccessPage;
