import { SHOW_MODAL, CLOSE_MODAL, SEND_MESSAGE, SHOW_RESULT } from '../actions/action-types';

const modalSendMessage = (state, action) => {
    if(state === undefined){
        return {
            show: false,
            recipient: {},
            result: ''
        };
    }
    switch(action.type){
        case SHOW_MODAL:
            const user = action.payload;
            return {
                show: true,
                recipient: user
            }

        case CLOSE_MODAL:
            return {
                ...state.modalSendMessage,
                show: false
            }

        case SEND_MESSAGE:
            return {
                ...state.modalSendMessage,
                show: true
            }

        case SHOW_RESULT:
            return {
                ...state.modalSendMessage,
                result: action.payload
            } 

        default:
            return state.modalSendMessage;
    }
}

export default modalSendMessage;