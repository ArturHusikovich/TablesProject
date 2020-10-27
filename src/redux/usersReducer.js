const GET_USERS = 'GET_USERS';

let initialState = {
    usersData: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                    ...state,
                   usersData: action.users.users
                }
    
        default:
            return state;
    }
}

export const getUsers = (users) => {
    return {type: GET_USERS, users};
}

export const getUsersThunk = () => (dispatch) => {
    fetch('/users')
    .then(res => {
      return res.json()
    })
    .then(users => dispatch(getUsers( {users} )));

}



export default usersReducer;