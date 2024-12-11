import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importing the icons for filled and unfilled stars
import { OurCources } from '../../OurCources';  // Path to the file containing the course data
import styles from './Cources.module.css'; // Assuming you have a corresponding CSS module for styles

// Cources Component
function Cources() {
  return (
    <div className={styles.courses_container}>
      {/* Header Section */}
      <div className={styles.head}>
        <h1>We Offer the Following Courses</h1>
        <p>Best Software training institute in Pune and certification provider offers professional training across India. Advance your career today!</p>
      </div>

      {/* Course Details Section */}
      <div className={styles.details}>
        {OurCources.map((course, index) => (
          <div key={index} className={styles.course_card}>

            {/* time section */}
            <div className={styles.time}>{course.time}</div>
            
            {/* Image Section */}
            <img src={course.image} alt={course.heading} className={styles.course_image} />

            <div className={styles.content}>
              {/* Type Section */}
              <div className={styles.type}>{course.type}</div>

              {/* Course Info */}
              <div className={styles.heading}>{course.heading}</div>

              {/* Rating Stars */}
              <div className={styles.rating}>
                {Array.from({ length: 5 }, (_, i) => (
                  // Fill the star if the index is less than the rating
                  i < Math.floor(course.rating) ? (
                    <FaStar key={i} />
                  ) : i < course.rating ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  )
                ))}
                <p>{course.rating}</p>
              </div>

              {/* Price */}
              <div className={styles.price}>{course.price}</div>

              {/* Lessons & Students */}
              <div className={styles.studlesson}>
                <div className={styles.lesson}>{course.lesson}</div>
                <div className={styles.students}>{course.students}</div>
                {/* Button */}
             <Link to="/Course"> <button className={styles.learn_more_button}>{course.button}</button></Link>
              </div>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cources;
