import { 
    SHOW_MODAL_ADD_ADMINISTRATOR,
    MODAL_CLOSE,
    SHOW_ALERT,
    UPDATE_ADMINISTRATOR_LIST,
    SHOW_MODAL_SEND_MESSAGE_ALL
    
} from './action-types';

import { fetchAdministrators } from '../actions';
//import { createAdministrator } from './'


const createAdministrator =  (e, kamkabelService, AdministratorId) => async (dispatch) => {
    try{
        e.preventDefault();
        console.log(e.target.name.value);
        const newAdministrator = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            login: e.target.login.value,
            password: e.target.password.value,
            confirt_password: e.target.confirm_password.value
        }

        if( newAdministrator.password !== newAdministrator.confirt_password){
            dispatch({
                type: SHOW_ALERT,
                payload: { 
                    headerText:'Добавление нового администратора', 
                    text: 'Пароли не совпадают', 
                    type: 'danger'
                }
            })
        }
        else{
            const { name, surname, login, password } = newAdministrator;
            const { result, error } = await kamkabelService.createAdministrator(name, surname, login, password);
            if(error){
                throw new Error(JSON.stringify(error))
            }
            if(result){
                console.log(result);
                
                setTimeout(()=>dispatch({ type: MODAL_CLOSE }), 100)
                setTimeout(()=>{
                    dispatch({
                        type: SHOW_ALERT,
                        payload: { 
                            headerText:'Добавление нового администратора', 
                            text: 'администратор успешно добавлен', 
                            type: 'success'
                        }
                    })
                }, 300)
            }
        }
            
        
    }
    catch(error){
        console.log('Произошла ошибка: ', error);
        dispatch({
            type: SHOW_ALERT,
            payload: { 
                headerText:'Добавление нового администратора', 
                text: `Произошла ошибка: ${ error }`, 
                type: 'danger'
            }
        })
    }
}




export const showModalAddAdministrator = () => {
    return {
        type: SHOW_MODAL_ADD_ADMINISTRATOR,
        payload: { onSubmitForm : createAdministrator }
    }
}

export const showModalSendMessageAll = (kamkabelService) => async (dispatch) => {
    console.log('Нажал')
    console.log(kamkabelService);
    dispatch({
        type: SHOW_MODAL_SEND_MESSAGE_ALL,
        payload: { onSubmitForm : createAdministrator }
    })
}



export const myCloseModal = () => {
    return {
        type: MODAL_CLOSE
    }
}
