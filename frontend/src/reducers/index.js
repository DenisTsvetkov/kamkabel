import updateUserList from './user-list';
import modalSendMessage from './modal-send-message';
import alert from './alert';
import form from './form';

const reducer = (state, action) => {
    return {
        userList: updateUserList(state, action),
        modalSendMessage: modalSendMessage(state, action),
        alert: alert(state, action),
        form: form(state, action)
    }
}

export default reducer;