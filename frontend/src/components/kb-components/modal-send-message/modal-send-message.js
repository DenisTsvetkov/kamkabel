import React from 'react';
import { Modal, } from 'react-bootstrap';

import { connect } from 'react-redux';
import { compose } from '../../../utils';

import { showModal, closeModal, sendMessage } from '../../../actions';

import { withKamkabelService } from '../../hoc-helpers';

import './modal-send-message.css';

const ModalBootstrap = ({ show, recipient, onCloseModal, onSubmitForm, result }) => {
        console.log(onSubmitForm);
        const { name, surname } = recipient;
        return (
            <Modal id="modal-send-message" show={show} onHide={ onCloseModal }>
                <Modal.Header closeButton>
                <Modal.Title>Отправка сообщения { `${name} ${surname}` }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={ onSubmitForm }>
                    <textarea name="message" placeholder="Введите сообщение">

                    </textarea>

                    <input className="btn btn-primary" type="submit" value="отправить сообщение"/>
                </form>
                </Modal.Body>
                <Modal.Footer>
                { result }
                {/* <Button variant="primary">
                    Отправить сообщение
                </Button> */}
                </Modal.Footer>
            </Modal>
        )
}

const mapStateToProps = ({ modalSendMessage: { show, recipient, result } }) => {
    return { 
        show, 
        recipient,
        result
    }
}

// const mapDispatchToProps = (dispatch, { kamkabelService }) => {
//     return {
//         fetchUsers: fetchUsers(kamkabelService, dispatch),
//         onShowModalWindow: (id) => dispatch(showModal(id))
//     }
// }


const mapDispatchToProps = (dispatch, { kamkabelService }) => {
    return {
        onCloseModal: () => dispatch(closeModal()),
        onSubmitForm: (e) => dispatch(sendMessage(e, kamkabelService))
    }
  }

export default compose(
                    withKamkabelService(),
                    connect(mapStateToProps, mapDispatchToProps)
                )(ModalBootstrap);