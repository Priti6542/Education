import React from 'react'
import { Link } from 'react-router-dom'  // Import Link from react-router-dom
import styles from './Navbar.module.css' // Import the CSS module
import { BsCart3 } from "react-icons/bs";  // Import the cart icon
import { IoIosSearch } from "react-icons/io";
import {useState} from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const mobile = window.innerWidth <= 768;  // Check if it's a mobile view
    const [menuOpened, setMenuOpened] = useState(false);  // Track menu state

    return (
        <div className={styles.container}>
            {/* Mobile Menu Icon - only visible on mobile */}
            {mobile && (
                <div
                    className={styles.menuIcon}
                    onClick={() => setMenuOpened(!menuOpened)} // Toggle menu on click
                >
                    {/* Using React Icon (FaBars) instead of an image */}
                    <FaBars className={styles.barIcon} />
                </div>
            )}
            <nav className={styles.Navbar}>
            <ul className={`${styles.navbarList} ${menuOpened ? styles.navbarListOpen : ''}`}>
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
