import React, { useState } from 'react';
import styles from './MainContent.module.css';
import {connect} from 'react-redux';
import {getUsersThunk} from '../../redux/usersReducer';
import UsersContainer from './UsersContainer';

const MainContent = (props) => {
    const [editMode, setEditMode] = useState(true); 

    const onSubmit = () => {
        props.getUsersThunk();
        setEditMode(false);  
    } 

    return (
    <div className={styles.item}>
        { editMode ? <div className={styles.block}>
                     <h2>Be careful! There is some secret information from US Interpol!</h2>
                     <button onClick={ onSubmit } className={styles.btn}>I agree!</button></div> 
                   : <UsersContainer users={props.users} /> }
    </div>
    )
}

let mapStateToProps = (state) =>  ({ 
    users: state.users.usersData
  })
  
  export default connect(mapStateToProps, {getUsersThunk} ) (MainContent);