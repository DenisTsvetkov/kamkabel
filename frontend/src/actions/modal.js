import { SHOW_MODAL, CLOSE_MODAL, SHOW_RESULT, SHOW_ALERT } from './action-types';

const showModal = (user) => {
    return {
        type: SHOW_MODAL,
        payload: user
    }
}

const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

const sendMessage = (e, kamkabelService) => (dispatch) => {
    e.preventDefault();

    const textMsg = e.target[0].value;

    if(textMsg.length === 0){
        dispatch({ type: SHOW_RESULT, payload: 'Сообщение пустое' })
    }
    else{
        kamkabelService.sendMessage(1, e.target[0].value)
        .then(res => {
            console.log(res);
            //dispatch({ type: SHOW_RESULT, payload: 'Сообщение успешно доставлено' })
            setTimeout(()=>dispatch({ type: CLOSE_MODAL }), 500)
            setTimeout(()=>{
                dispatch({
                    type: SHOW_ALERT,
                    payload: {
                        headerText: 'Новое сообщение',
                        text: 'Новое сообщение успешно отправлено',
                        type: 'success'
                    }
                })
            }, 1000)
            
        })
    }


    
            // return {
            //     type: SEND_MESSAGE
            // }
    // return dispatch =>{
    //     console.log(dispatch);
    //     return {
    //         type: SEND_MESSAGE
    //     }
    // }
    
}


export {
    showModal,
    closeModal,
    sendMessage
}