import { SHOW_ALERT, CLOSE_ALERT } from '../actions/action-types';

const alert = (state, action) => {
    if(state === undefined){
        return {
            show: false,
            headerText: '',
            text: '',
            type: ''
        };
    }
    switch(action.type){
        case SHOW_ALERT:
            const { headerText, text, type } = action.payload;
            return {
                show: true,
                headerText,
                text,
                type
            }

        case CLOSE_ALERT:
            return {
                ...state.alert,
                show: false
            }
        
        default:
            return state.alert;
    }
}

export default alert;