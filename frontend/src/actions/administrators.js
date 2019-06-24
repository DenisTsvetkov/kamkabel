import { FETCH_ADMINISTRATORS_REQUEST, FETCH_ADMINISTRATORS_SUCCESS, UPDATE_ADMINISTRATOR_LIST } from './action-types';

const administratorsRequested = () => {
    return {
        type: FETCH_ADMINISTRATORS_REQUEST
    }
};

const administratorsLoaded = (administrators) => {
    console.log('administratorsLoaded', administrators);
    return {
        type: FETCH_ADMINISTRATORS_SUCCESS,
        payload: administrators
    }
};

const fetchAdministrators = (kamkabelService, dispatch) => () => {
    dispatch(administratorsRequested());
    kamkabelService.getAllAdministrators()
    .then(administrators => dispatch(administratorsLoaded(administrators)))
}

export { fetchAdministrators };