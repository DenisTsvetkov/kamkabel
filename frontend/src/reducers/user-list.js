const updateUserList = (state, action) => {

    if (state === undefined){
        return {
            users: [],
            loading: true,
        };
    }

    switch(action.type){
        case 'FETCH_USERS_REQUEST':
            return {
                users: [],
                loading: true
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                users: action.payload,
                loading: false
            }
        default:
            return state.userList;
    }
}
export default updateUserList;