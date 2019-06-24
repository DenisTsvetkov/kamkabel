import updateUserList from './user-list';
import modalSendMessage from './modal-send-message';
import alert from './alert';
import form from './form';
import administratorList from './administrator-list';
import modal from './modal';
import administrator from './administrator';
import messageList from './message-list';

const reducer = (state, action) => {
    return {
        userList: updateUserList(state, action),
        modalSendMessage: modalSendMessage(state, action),
        alert: alert(state, action),
        form: form(state, action),
        administratorList: administratorList(state, action),
        modal: modal(state, action),
        administrator: administrator(state, action),
        messageList: messageList(state, action)
    }
}

export default reducer;