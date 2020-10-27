import React from 'react';
import styles from './Preview.module.css';

const Preview = (props) => {
    return (
    <div>

        <div className={styles.item}>
            <div className={styles.box}>
                {/* <img src={ props.user.image === 'cat' ? cat : pig } alt="Avatar" className={styles.ava} /> */}
            </div>
            <div className={styles.dbox}>{props.user.name}</div>
            <div className={styles.box}>{props.user.age}</div>
            <div className={styles.dbox}>{props.user.phone}</div>
            <div className={styles.box}>
                {/* <img src={ !props.user.favourite ? follow : unfollow} alt="Star" className={styles.starImg} /> */}
            </div>

        </div>
 

    </div>
    )
}



export default Preview; 