import { 
    SHOW_FORM_USER_INFO, 
    SHOW_FORM_BOT_INFO, 
    SHOW_NOTIFICATION_FORM, 
    SEND_FORM_USER_INFO, 
    SEND_FORM_BOT_INFO 
} from '../actions/action-types';

import { sendFormUserInfo, sendFormBotInfo } from '../actions/form'; 

const form = (state, action) => {
    if(state === undefined){
        return {
            data: {
                user: {
                    name: '',
                    surname: '',
                    username: '',
                    password: ''
                },
                bot: {
                    name: '',
                    apiKey: ''
                }

            },
            inputGroups: [
                {
                    label: 'Имя',
                    type: 'text',
                    placeholder: 'Введите ваше имя',
                    name: 'name',
                    required: true
                },
                {
                    label: 'Фамилия',
                    type: 'text',
                    placeholder: 'Введите вашу фамилию',
                    name: 'surname',
                    required: true
                },
                {
                    label: 'Имя пользователя (логин)',
                    type: 'text',
                    placeholder: 'Введите имя пользователя',
                    name: 'username',
                    required: true
                },
                {
                    label: 'Пароль',
                    type: 'password',
                    placeholder: 'Введите пароль',
                    name: 'password',
                    required: true
                },
                {
                    label: 'Повторите пароль',
                    type: 'password',
                    placeholder: 'Повторите пароль',
                    name: 'confirm_password',
                    required: true
                }
                
            ],
            button: {
                variant: 'primary',
                text: 'Далее',
                onClickFunction: sendFormUserInfo
            },
            formNotification: {}
        };
    }

    switch(action.type){
        case SHOW_FORM_USER_INFO: 
            return {
                ...state.form,
                button: {
                    variant: 'primary',
                    text: 'Далее',
                    onClickFunction: sendFormUserInfo
                }
            }

        case SHOW_FORM_BOT_INFO:
                return {
                    ...state.form,
                    inputGroups: [
                        {
                            label: 'Название бота',
                            type: 'text',
                            placeholder: 'Введите название бота',
                            name: 'bot_name',
                            required: true
                        },
                        {
                            label: 'Секретный ключ (API-KEY)',
                            type: 'text',
                            placeholder: 'Введите api-key',
                            name: 'bot_api_key',
                            required: true
                        }
                    ],
                    button: {
                        variant: 'success',
                        text: 'Завершить',
                        onClickFunction: sendFormBotInfo
                    },
                    formNotification: {
                        type: '',
                        text: ''
                    }
                };

        case SHOW_NOTIFICATION_FORM:
            return {
                ...state.form,
                formNotification: action.payload
            }

        case SEND_FORM_USER_INFO:
            return {
                ...state.form,
                data:{
                    ...state.form.data,
                    user: action.payload
                }
            }
        
        case SEND_FORM_BOT_INFO:
                return {
                    ...state.form,
                    data:{
                        ...state.form.data,
                        bot: action.payload
                    }
                }

        default:
            return state.form
    }
}

export default form;