'use client'

import styles from "@/app/contacts/contact.module.css"
import {Mulish} from "next/font/google";
import {useState} from "react";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})



const ContactForm = () => {
   
    
    const [formData, setFormData] = useState({

        name: "",
        email: "",
        number: "",
        message: "",

      });



      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = "/api/submitFormData";

        try {
            const response = await fetch(apiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              console.log("Data submitted successfully");
              // Clear the form or show a success message
            } else {
              console.error("Error submitting data");
            }
          } catch (error) {
            console.error("Error:", error);
          }

    }



    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                        placeholder="Enter your name"
                           className={mulish.className}
                           
                           onChange={handleChange}
                           required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                           placeholder="Enter your email"
                           className={mulish.className}
                           
                           onChange={handleChange}
                           required
                           autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                           placeholder="Enter your phone"
                           className={mulish.className}
                           
                           onChange={handleChange}
                           required
                            autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea  name="message" id="message" rows={5}
                           placeholder="Enter your Message"
                           className={mulish.className}
                               
                               onChange={handleChange}
                               required
                                autoComplete="off"
                    />
                </label>
            </div>

            <div>
               
                <button type="submit" className={mulish.className}>Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;