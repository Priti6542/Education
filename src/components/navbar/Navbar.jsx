import React from 'react'
import { Link } from 'react-router-dom'  // Import Link from react-router-dom
import styles from './Navbar.module.css' // Import the CSS module
import { BsCart3 } from "react-icons/bs";  // Import the cart icon
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <a href="#" className="logo">
                <img src="/assets/images/logo.svg" width="162" height="50" alt="EduWeb logo" />
            </a>

            <nav className={styles.Navbar}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link to="/" className={styles.navbarLink}>Home</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <a href="/about" className={styles.navbarLink} data-nav-link>About</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a href="/courses" className={styles.navbarLink} data-nav-link>Courses</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a href="/blog" className={styles.navbarLink} data-nav-link>Blog</a>
                    </li>
                    <li className={styles.navbarItem}>
                        <a href="/contact" className={styles.navbarLink} data-nav-link>Contact</a>
                    </li>
                </ul>
            </nav>

            <div className={styles.headerActions}>
                {/* Cart Button with Icon */}
                <button className={styles.search}><IoIosSearch size={24}/>
                </button>
                <button className={styles.headerActionBtn} aria-label="cart" title="Cart">
                    <BsCart3 size={24} />  {/* Cart icon */}
                    <span className={styles.btnBadge}>0</span>  {/* Badge with item count */}
                </button>

                <a href="#" className={styles.btnHasBefore}>
                    <span className={styles.span}>Try for free </span>
                </a>
            </div>

            <div className={styles.overlay}></div>
        </div>
    )
}

export default Navbar
