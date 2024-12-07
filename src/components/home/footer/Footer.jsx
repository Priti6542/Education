import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





function Footer() {
    return (
        <div className={styles.Footer}>

            <div className={styles.content}>

                <div className={styles.text}>
                    <h2>Edu Web</h2>

                    <p>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p>

                    <p>Add:70-80 Upper St Norwich NR2
                        Call:+01 123 4567 890
                        Email:info@eduweb.com</p>

                </div>
                <div className={styles.Onlineplatform}>
                    <h2>Online Platform</h2>
                    <ul>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Instructor</li>
                        <li>Events</li>
                        <li>Instructor Profile</li>
                        <li>Purchase Guide</li>
                    </ul>

                </div>
                <div className={styles.link}>
                    <h2>Links</h2>

                    <ul>
                        <li>Contact Us</li>
                        <li>Gallery</li>
                        <li>News & Articles</li>
                        <li>FAQ's</li>
                        <li>Sign in/Registration</li>
                    </ul>

                </div>
                <div className={styles.contacts}>
                    <h2>Contacts</h2>
                    <p>Enter your email address to register to our newsletter subscription</p>
                    <div className={styles.mail}>
                        <input type='email' placeholder='Your email'></input>
                        <button>Subscribe</button>
                    </div>
                    <div className={styles.socialIcons}>
                        <FaFacebook />
                        <FaLinkedin />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
