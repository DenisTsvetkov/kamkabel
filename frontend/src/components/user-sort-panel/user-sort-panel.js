import React, { Fragment } from 'react';
import './user-sort-panel.css'
import { showModalSendMessageAll } from '../../actions';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withKamkabelService } from '../hoc-helpers';

const UserSortPanel = ({onShowModalWindow}) => {
    return (
        <div className="user-sort-panel">
            <button 
                    onClick={ () => onShowModalWindow() }
                    className="btn btn-primary send-message-all">Отправить сообщение всем
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch, { kamkabelService }) => {
    return {
        onShowModalWindow: () => dispatch(showModalSendMessageAll(kamkabelService))
    }
}

export default compose(
        withKamkabelService(),
        connect(null, mapDispatchToProps)
    )(UserSortPanel);