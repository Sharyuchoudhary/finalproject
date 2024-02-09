
import Image from "next/image";
import styles from "@/app/contacts/contact.module.css";
import Head from 'next/head';

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <Head>
      <title>Contact the Skill Sail Team</title>
      <meta name="description" content="Connect with the Skill Sail team - experienced professionals ready to assist you. Learn about our team members, their expertise, and how they can help you succeed in our online courses." />
    </Head>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <Image className={styles.cropimage} src="/d.jpeg" alt="Anjali Sharma - Skill Sail Team Member" width={300} height={200} />
            <h2>Anjali Sharma</h2>
            <p>Contact: +91-123-456-7890</p>
            <p className={styles.last_para}>Experience: 15 years</p>
          </div>

          <div className={styles.grid_card}>
            <Image className={styles.cropimage} src="/d.jpeg" alt="Rahul Kapoor - Skill Sail Team Member" width={300} height={200} />
            <h2>Rahul Kapoor</h2>
            <p>Contact: +91-987-654-3210</p>
            <p className={styles.last_para}>Experience: 12 years</p>
          </div>

          <div className={styles.grid_card}>
            <Image className={styles.cropimage} src="/d.jpeg" alt="Priya Gupta - Skill Sail Team Member" width={300} height={200} />
            <h2>Priya Gupta</h2>
            <p>Contact: +91-555-123-4567</p>
            <p className={styles.last_para}>Experience: 10 years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

