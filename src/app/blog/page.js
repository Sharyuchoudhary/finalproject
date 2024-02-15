'use client'

import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import styles from "@/app/styles/common.module.css";


export default function Page() {
  const [dataresponse, setdataresponse] = useState([]);

  useEffect(() => {
    async function getblogdata() {
      const response = await fetch('/api/admin/createblog', {
        method: "GET",
      });
      const res = await response.json();
      setdataresponse(res.data);
    }

    getblogdata();
  }, []);

  return (
    <div className={styles.blogdiv}>
     
      <Helmet>
        <title>Skillsail Blogs</title>
        <meta name="description" content="Explore the latest blogs from Skillsail." />
      </Helmet>

      <h2>SKILLSAIL BLOGS</h2>
      {dataresponse.map((item) => (
        <div className={styles.md} key={item.id}>
          <div className={styles.md1}>
            <p>TITLE</p>{item.title}
          </div>
          <div className={styles.md2}>
            <p>CONTENT</p>{item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
