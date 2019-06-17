const sendMessageToUser = (state, action) => {
    if(state === undefined){
        return {
            show: false,
            recipient: {}
        };
    }

    switch(action.type){
        case 'SHOW_MODAL_TO_SEND_MESSAGE':
            const user = action.payload;
            return {
                show: !state.modalSendMessage.show,
                recipient: user
            }
            
        default:
            return state.modalSendMessage;
    }
}

export default sendMessageToUser;