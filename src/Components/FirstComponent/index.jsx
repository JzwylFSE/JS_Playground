import React from 'react';
import styles from './styles.module.css';

export default function FirstComponent({ title, description }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
