import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { compose } from '../../../utils';

import { showModalToSendMessage } from '../../../actions';

import './modal-send-message.css';

const ModalBootstrap = ({ show, recipient, onShowModalWindow }) => {
    if(show){
        const { name, surname, username, phone, avatar } = recipient;

        return (
            <Modal id="modal-send-message" show={show} onHide={onShowModalWindow}>
                <Modal.Header closeButton>
                <Modal.Title>Отправка сообщения { `${name} ${surname}` }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form action="">
                    <textarea name="" placeholder="Введите сообщение">

                    </textarea>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary">
                    Отправить сообщение
                </Button>
                </Modal.Footer>
            </Modal>
            )
    }
    return null;
}

const mapStateToProps = ({ modalSendMessage: { show, recipient } }) => {
    return { 
        show, 
        recipient
    }
}

const mapDispatchToProps = {
    onShowModalWindow: showModalToSendMessage
  }

export default compose(
                    connect(mapStateToProps, mapDispatchToProps)
                )(ModalBootstrap);