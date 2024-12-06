import React from 'react'
import styles from './News.module.css'
import { NewsData } from '../../../NewsData';

function News() {
    return (
        <div className={styles.news_container}>
            <div className={styles.article}></div>
            {NewsData.map((news, index) => (
                <div className={styles.news_item} key={index}>
                    <img src={news.image} alt={news.heading} className={styles.image} />
                    <div className={styles.news_details}>
                        <h3>{news.heading}</h3>

                        <div className={styles.mode}>{news.mode}</div>

                        <div className={styles.date}>{news.date}  |    {news.Com} </div>

                        <p>{news.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default News
