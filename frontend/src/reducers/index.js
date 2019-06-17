import updateUserList from './user-list';
import sendMessageToUser from './modal-send-message';

const reducer = (state, action) => {
    return {
        userList: updateUserList(state, action),
        modalSendMessage: sendMessageToUser(state, action)
    }
}

export default reducer;