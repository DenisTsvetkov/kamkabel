import { FETCH_OUTGOING_MESSAGES_REQUEST, FETCH_OUTGOING_MESSAGES_SUCCESS } from './action-types';

const messagesRequested = () => {
    return {
        type: FETCH_OUTGOING_MESSAGES_REQUEST
    }
};

const messagesLoaded = (outgoingMessages) => {
    return {
        type: FETCH_OUTGOING_MESSAGES_SUCCESS,
        payload: outgoingMessages
    }
};

const fetchMessages = (kamkabelService, dispatch) => () => {
    dispatch(messagesRequested());
    kamkabelService.getAllMessagesByAdministratorId(1)
    .then(outgoingMessages => dispatch(messagesLoaded(outgoingMessages)))
}

export { fetchMessages };