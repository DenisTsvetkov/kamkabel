import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './action-types';

const usersRequested = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
};

const usersLoaded = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

const fetchUsers = (kamkabelService, dispatch) => () => {
    dispatch(usersRequested());
    kamkabelService.getAllUsers()
    .then(users => dispatch(usersLoaded(users)))
}

export { fetchUsers };