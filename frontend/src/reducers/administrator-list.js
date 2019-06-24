import  { FETCH_ADMINISTRATORS_REQUEST, FETCH_ADMINISTRATORS_SUCCESS } from '../actions/action-types';

const AdministratorList = (state, action) => {

    if (state === undefined){
        return {
            administrators: [],
            loading: true,
        };
    }

    switch(action.type){
        case FETCH_ADMINISTRATORS_REQUEST:
            return {
                administrators: [],
                loading: true
            }
        case FETCH_ADMINISTRATORS_SUCCESS:
            return {
                administrators: action.payload,
                loading: false
            }
        default:
            return state.administratorList;
    }
}
export default AdministratorList;