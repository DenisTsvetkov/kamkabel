import { SHOW_MODAL_ADD_ADMINISTRATOR, MODAL_CLOSE, SHOW_MODAL_SEND_MESSAGE_ALL } from '../actions/action-types';

const modal = (state, action) => {
    
    // show, config: { title }, inputs, onCloseModal, onSubmitForm
    if(state === undefined){
        return {
            show: false,
            config: {
                title: ''
            },
            inputs: []
        };
    }

   

    switch(action.type){
        case SHOW_MODAL_ADD_ADMINISTRATOR:
            return {
                show: true,
                config: {
                    title: 'Добавление нового администратора',
                    onSubmitForm: action.payload.onSubmitForm
                },
                inputs: [
                    {
                        type: 'input',
                        name: 'name',
                        required: true,
                        placeholder: 'Введите имя'
                    },
                    {
                        type: 'input',
                        name: 'surname',
                        required: true,
                        placeholder: 'Введите фамилию'
                    },
                    {
                        type: 'input',
                        name: 'login',
                        required: true,
                        placeholder: 'Введите логин'
                    },
                    {
                        type: 'password',
                        name: 'password',
                        required: true,
                        placeholder: 'Введите пароль'
                    },
                    {
                        type: 'password',
                        name: 'confirm_password',
                        required: true,
                        placeholder: 'Повторите пароль'
                    },
                    {
                        type: 'submit',
                        value: 'Добавить',
                        variant: 'primary'
                    }
                ]
            }
        case SHOW_MODAL_SEND_MESSAGE_ALL:
            console.log('SHOW_MODAL_SEND_MESSAGE_ALL')
                return {
                    show: true,
                    config: {
                        title: 'Отправить сообщение всем пользователям',
                        onSubmitForm: action.payload.onSubmitForm
                    },
                    inputs: [
                        {
                            type: 'textarea',
                            name: 'message',
                            required: true,
                            placeholder: 'Введите текст сообщения'
                        },
                        {
                            type: 'submit',
                            value: 'Отправить',
                            variant: 'primary'
                        }
                    ]
                }
        case MODAL_CLOSE:
            return {
                show: false,
                config: {
                    title: ''
                },
                inputs: []
            }
        default:
            return state.modal;
    }
}

export default modal;