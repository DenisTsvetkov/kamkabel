export const usersRequested = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
};

export const usersLoaded = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
};

const fetchUsers = (kamkabelService, dispatch) => () => {
    dispatch(usersRequested());
    kamkabelService.getAllUsers()
    .then(users => dispatch(usersLoaded(users)))
}

export const showModalToSendMessage = (user) => {
    return {
        type: 'SHOW_MODAL_TO_SEND_MESSAGE',
        payload: user
    }
}



// const sendMessage = (kamkabelService, dispatch) => () => {
//     kamkabelService.
// }


export {
    fetchUsers
}