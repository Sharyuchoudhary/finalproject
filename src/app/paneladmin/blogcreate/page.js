'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '@/app/styles/common.module.css';

export default function WriteablogPage() {
  const [message, setMessage] = useState('');
  const [dataresponse, setdataresponse] = useState([]);
  const [msg, setmsg] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = '/api/admin/createblog';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responsedata = await response.json();
      console.log(responsedata.msg);
      setmsg(responsedata.msg);

      if (response.ok) {
        setFormData({ title: '', content: '' });
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function handledelete(item) {
    try {
      const todeleteblog = item._id;

      const response = await fetch('/api/admin/createblog', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogId: todeleteblog }),
      });

      if (response.ok) {
        const { message } = await response.json();
        setMessage(message);
      } else {
        console.log('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  useEffect(() => {
    async function getblogdata() {
      const response = await fetch('/api/admin/createblog', {
        method: 'GET',
      });
      const res = await response.json();
      console.log(res.data);
      setdataresponse(res.data);
    }

    getblogdata();
  }, []);

  return (
    <div className={styles.frm}>
      <Head>
        <title>Write a Blog - Skillsail</title>
        <meta
          name="description"
          content="Write and manage blogs on Skillsail. Share your knowledge and experiences with the Skillsail community."
        />
      </Head>

      <div className={styles.sdiv}>
        <form className={styles.f} onSubmit={handleSubmit}>
          <input
            className={styles.t}
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleChange}
          />
          <textarea
            className={styles.t}
            type="text"
            name="content"
            placeholder="Enter Content"
            onChange={handleChange}
          />
          <button className={styles.b} type="submit">
            Submit
          </button>
          {msg && (
            <p style={{ color: 'green', fontWeight: 'bold' }}>{msg}</p>
          )}
        </form>
      </div>

      <div className={styles.blogdiv}>
        <h2>SKILLSAIL BLOGS</h2>
        {dataresponse.map((item) => (
          <div className={styles.md} key={item.id}>
            <div className={styles.md1}>
              <p>TITLE</p>
              {item.title}
            </div>

            <div className={styles.md2}>
              <p>CONTENT</p>
              {item.content}
            </div>
            <button onClick={() => handledelete(item)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

