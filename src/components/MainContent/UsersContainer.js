import React, { useState, useEffect }from 'react';
import styles from './MainContent.module.css';
import Table from './Table/Table';
import Preview from './Preview/Preview';

const UsersContainer = (props) => {
    const [styleMode, setStyleMode] = useState(true);
    const [tableDisabled, setTableDisabled] = useState(true); 
    const [prevDisabled, setPrevDisabled] = useState(false); 

    const changeToTable = () => {
        setStyleMode(true); 
        setTableDisabled(true); 
        setPrevDisabled(false);
    }
    const changeToPreview = () => {
        setStyleMode(false);  
        setPrevDisabled(true); 
        setTableDisabled(false); 
    }

    const [sortedUsers, setSortedUsers] = useState(props.users);
    const [idDisabled, setIdDisabled] = useState(true); 
    const [ageDisabled, setAgeDisabled] = useState(false); 
    const [nameDisabled, setNameDisabled] = useState(false); 

    const sortById = () => {
        setSortedUsers([...sortedUsers].sort((a,b) => a.id > b.id ? 1 : -1));
        setIdDisabled(true);
        setAgeDisabled(false);
        setNameDisabled(false);
        setBtnText("Descending");
    };
    const sortByAge = () => {
        setSortedUsers([...sortedUsers].sort((a,b) => a.age > b.age ? 1 : -1));
        setIdDisabled(false);
        setAgeDisabled(true);
        setNameDisabled(false);
        setBtnText("Descending");
    };
    const sortByName = () => {
        setSortedUsers([...sortedUsers].sort((a,b) => a.name > b.name ? 1 : -1));
        setIdDisabled(false);
        setAgeDisabled(false);
        setNameDisabled(true);
        setBtnText("Descending");
    };

    const [btnText, setBtnText] = useState("Descending");

    const sortByDescend = () => {
        setSortedUsers([...sortedUsers].reverse());
        setBtnText(btnText !== "Ascending" ? "Ascending" : "Descending")
    };

    useEffect( () => {
        setSortedUsers(props.users);
    }, [props.users])

    return (
    <div>
        <div>
            <span>View:</span>
            <button onClick={changeToTable} disabled={tableDisabled} className={styles.changeBtn}>Table</button>
            <button onClick={changeToPreview} disabled={prevDisabled} className={styles.changeBtn}>Preview</button>
        </div>
        <div>
            <span>Sort By:</span>
            <button onClick={sortById} disabled={idDisabled} className={styles.sortBtn}>ID</button>
            <button onClick={sortByName} disabled={nameDisabled} className={styles.sortBtn}>Name</button>
            <button onClick={sortByAge} disabled={ageDisabled}className={styles.sortBtn}>Age</button>           
        </div>
        <div><span>Get</span>
            <button onClick={sortByDescend} disabled={false} className={styles.changeBtn}>{btnText}</button>
            <span>table</span>
        </div>
        {styleMode ? sortedUsers.map(user => <Table user={user} /> ) 
                   : sortedUsers.map(user => <Preview user={user} /> ) }          
    </div>
    )   
}

export default UsersContainer; 