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

const sendMessage = (e, recipient, kamkabelService) => (dispatch) => {
    e.preventDefault();

    const textMsg = e.target[0].value;

    if(textMsg.length === 0){
        //dispatch({ type: SHOW_RESULT, payload: 'Сообщение должно содержать текст' })
        dispatch({
            type: SHOW_ALERT,
            payload: {
                headerText: 'Новое сообщение',
                text: 'Сообщеиие не должно быть пустым',
                type: 'warning'
            }
        });
    }
    else{

        const newMessages = {
            'AdministratorId': 1,
            'messeges': [
                {
                    'UserId': recipient.UserId,
                    'text': textMsg
                }
            ]
        }

        kamkabelService.sendMessageToUser(newMessages.AdministratorId, newMessages.messeges)
        .then(res => {
            console.log('ОТПРАВИЛИ СООБЩЕНИЕ НА СЕРВЕР. ОТВЕТ ', res)
            const { result, error } = res;

            
            //dispatch({ type: SHOW_RESULT, payload: 'Сообщение успешно доставлено' })
            setTimeout(()=>dispatch({ type: CLOSE_MODAL }), 100)
            setTimeout(()=>{
                dispatch({
                    type: SHOW_ALERT,
                    payload: {
                        headerText: 'Новое сообщение',
                        text: error ? `Во время отправки произошла ошибка \n ${error}` : 'Новое сообщение успешно отправлено',
                        type: error ? 'danger' : 'success'
                    }
                })
            }, 300)
            
        })
        .catch(error => {
            console.log(error);
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