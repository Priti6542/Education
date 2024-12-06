import React from 'react';
import styles from './Card.module.css';  // Ensure your CSS file is set up correctly
import { CardData } from '../../../CardData';

const Card = () => {
    return (
        <div className={styles.card_container}>
            <div className={styles.heading}>
                <div>CATEGORIES</div>
                <div>Online Classes For Remote Learning</div>
                <div>Consectetur adipiscing elit sed do eiusmod tempor.</div>
            </div>

            <div className={styles.carddata}>
                {CardData.map((card, index) => (
                    <div
                        className={styles.card}
                        key={index}
                        style={{ backgroundColor: card.backgroundcolor }} // Dynamically set background color
                    >
                        {/* Display the icon if available */}
                        {card.icon && <img src={card.icon} alt={card.name} />}

                        <h3>{card.name}</h3>
                        <p>{card.details}</p>
                        <div>{card.cources}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
