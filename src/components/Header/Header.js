import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return (
    <div className={styles.header}>
        <h1 className={styles.item}>
            <span className={styles.span}>H</span>ello M<span className={styles.span}>y F</span>riend!
        </h1>
    </div>
    )
}

export default Header; 