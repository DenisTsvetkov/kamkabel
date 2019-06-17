import { SHOW_ALERT, CLOSE_ALERT } from './action-types';

const showAlert = (headerText, text, type) => {
    return {
        type: SHOW_ALERT,
        payload: { headerText, text, type}
    }
}

const closeAlert = () => {
    return {
        type: CLOSE_ALERT
    }
}

export {
    showAlert,
    closeAlert
}