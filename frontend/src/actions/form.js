import { 
    SHOW_FORM_USER_INFO, 
    SHOW_FORM_BOT_INFO, 
    SHOW_NOTIFICATION_FORM, 
    SEND_FORM_USER_INFO,
    SEND_FORM_BOT_INFO 
} from './action-types';


export const showFormUserInfo = () => {
    return {
        type: SHOW_FORM_USER_INFO
    }
}

export const showFormBotInfo = () => {
    return {
        type: SHOW_FORM_BOT_INFO
    }
}

export const sendFormUserInfo = (e) => dispatch => {
    e.preventDefault();
    const {name, surname, username, password, confirm_password } = e.target.elements;

    if(password.value === confirm_password.value){

        dispatch({
            type: SEND_FORM_USER_INFO,
            payload: {
                name: name.value,
                surname: surname.value,
                username: username.value,
                password: password.value
            }
        });

        dispatch({
            type: SHOW_FORM_BOT_INFO
        });
    }
    else{
        dispatch({
            type: SHOW_NOTIFICATION_FORM,
            payload:{
                type: 'warning',
                text: 'Пароли не совпадают'
            }
        });
    }
}

export const sendFormBotInfo = (e, kamkabelService) => (dispatch, getState) => {
    e.preventDefault();
    const { bot_name, bot_api_key } = e.target.elements;
    dispatch({
        type: SEND_FORM_BOT_INFO,
        payload: {
            name: bot_name.value,
            apiKey: bot_api_key.value
        }
    })

    const { user, bot } = getState().form.data;

    kamkabelService.createUser(user)
    .then(res => {
        console.log(res);
        kamkabelService.createBot(bot)
        .then(resBot => {
            console.log(resBot);
        })
    });
}