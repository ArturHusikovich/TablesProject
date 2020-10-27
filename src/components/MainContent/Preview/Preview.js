import React from 'react';
import styles from './Preview.module.css';

const Preview = (props) => {
    return (
    <div className={styles.item}>
        <div className={styles.sec}>{props.user.name}</div>
 

    </div>
    )
}



export default Preview; 