import React from 'react';
import styles from './Table.module.css';
import follow from '../../../images/follow.png';
import unfollow from '../../../images/unfollow.png';
import pig from '../../../images/pig.svg';
import cat from '../../../images/cat.svg';


const Table = (props) => {
    return (
    <div className={styles.content}>
        <div className={styles.item}>
            <div className={styles.box}>
                <img src={ props.user.image === 'cat' ? cat : pig } alt="Avatar" className={styles.ava} />
            </div>
            <div className={styles.dbox}>{props.user.name}</div>
            <div className={styles.box}>{props.user.age}</div>
            <div className={styles.dbox}>{props.user.phone}</div>
            <div className={styles.box}>
                <img src={ !props.user.favourite ? follow : unfollow} alt="Star" className={styles.starImg} />
            </div>

        </div>
      
      
    </div>
    )
}

export default Table; 