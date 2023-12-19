import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>SKILL SAIL </span>
                        </div>
                        
                        <div className={footerStyles[`media-icons`]}>
  <Link href="https://www.facebook.com/your-facebook-page-url"><i><FaFacebookF /></i></Link>
  <Link href="https://www.twitter.com/your-twitter-profile-url"><i><FaTwitter /></i></Link>
  <Link href="https://www.instagram.com/your-instagram-profile-url" target="_blank"><i><FaInstagram /></i></Link>
  <Link href="https://www.linkedin.com/your-linkedin-profile-url"><i><FaLinkedinIn /></i></Link>
  <Link href="https://www.youtube.com/your-youtube-channel-url"><i><FaYoutube /></i></Link>
</div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contacts">Contact us</a></li>
                            <li><a href="/aboutus">About us</a></li>
                            <li><a href="/courses">Courses</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Services</li>
                            <li><a href="/faq">FAQs</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/courses">Courses</a></li>                            
                        </ul>
                       
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Courses</li>
                            <li><a href="#">Classical </a></li>
                            <li><a href="#">Hip-Hop</a></li>
                            <li><a href="#">Funky</a></li>
                            <li><a href="#">Ballerina</a></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>">RTHYMIX</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;