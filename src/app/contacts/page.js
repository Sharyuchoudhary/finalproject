import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We would love to hear <span> from you </span></h2>
                    <ContactForm />
                </section>
            </div>

            <div className={styles.map_container}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121066.9156982883!2d73.78920832552211!3d18.513481058547693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c159f41509af%3A0x23f157717fde364c!2sDance%20Classes%20in%20Pune!5e0!3m2!1sen!2sin!4v1692700890368!5m2!1sen!2sin"
                    width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
};

export default Contact;
