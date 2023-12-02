import styles from "@/app/contacts/contact.module.css"



const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>

                <div className={styles.grid}>
                <div className={styles.section}>
    <div className={styles.container}>
        <div className={styles.grid}>
            <div className={styles.grid_card}>
<img className={styles.cropimage} src="" alt=""  />
                <h2>Anjali Sharma</h2>
                <p>Contact: +91-123-456-7890</p>
                <p className={styles.last_para}>Experience: 15 years</p>
            </div>
            
        

            <div className={styles.grid_card}>
<img className={styles.cropimage} src="" alt=""  />
                <h2>Rahul Kapoor</h2>
                <p>Contact: +91-987-654-3210</p>
                <p className={styles.last_para}>Experience: 12 years</p>
            </div>

            <div className={styles.grid_card}>
            <img className={styles.cropimage} src="" alt=""  />
                <h2>Priya Gupta</h2>
                <p>Contact: +91-555-123-4567</p>
                <p className={styles.last_para}>Experience: 10 years</p>
            </div>
        </div>


    </div>
</div>


                </div>
            </div>
        </div>
    );
};

export default ContactCard;