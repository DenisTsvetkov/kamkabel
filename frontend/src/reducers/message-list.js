import  { FETCH_OUTGOING_MESSAGES_REQUEST, FETCH_OUTGOING_MESSAGES_SUCCESS } from '../actions/action-types';

const MessageList = (state, action) => {
    console.log('Пришёл PAYLOAD: ', action.payload);
    if (state === undefined){
        return {
            incomingMessages: [],
            outgoingMessages: [],
            loading: true,
        };
    }

    switch(action.type){
        case FETCH_OUTGOING_MESSAGES_REQUEST:
            return {
                outgoingMessages: [],
                loading: true
            }
        case FETCH_OUTGOING_MESSAGES_SUCCESS:
            return {
                outgoingMessages: action.payload,
                loading: false
            }
        default:
            return state.messageList;
    }
}
export default MessageList;