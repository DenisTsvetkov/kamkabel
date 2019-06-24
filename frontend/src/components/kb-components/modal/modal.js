import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { compose } from '../../../utils';

//import { showModal, closeModal, sendMessage } from '../../../actions';
import { myCloseModal } from '../../../actions';
import { withKamkabelService } from '../../hoc-helpers';

import './modal.css';

const ModalBootstrap = ({ dispatch, AdministratorId, show, config: { title, onSubmitForm }, inputs, onCloseModal, kamkabelService}) => {
        return (
            <Modal id="modal-send-message" show={show} onHide={ onCloseModal }>
                <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={ (e) => dispatch(onSubmitForm(e, kamkabelService, AdministratorId)) }>
                    {
                        inputs.map(({ type, name, placeholder, required, variant, value }, idx) => {
                            
                            switch(type){
                                case 'textarea':
                                    return (
                                        <Form.Group key={ idx }>
                                            <Form.Control name={ name } placeholder={ placeholder } as={ type } rows="3" />
                                        </Form.Group>
                                    );
                                case 'input':
                                    return (
                                        <Form.Group key={ idx }>
                                            <Form.Control type={ type } name={ name } placeholder={ placeholder } required={ required } />
                                        </Form.Group>
                                    );
                                case 'password':
                                    return (
                                        <Form.Group key={ idx }>
                                            <Form.Control type={ type } name={ name } placeholder={ placeholder } required={ required } />
                                        </Form.Group>
                                    );
                                case 'submit': 
                                    return (
                                        <Button key={ idx } className="float-right" variant={ variant } type={ type }>
                                            { value }
                                        </Button>
                                    )
                                default:
                                    return;
                            }
                            
                        })
                    }
                </form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        )
}

const mapStateToProps = ({ administrator: { id }, modal: { show, config, inputs } }, { kamkabelService }) => {
    return {
        AdministratorId: id,
        show,
        config,
        inputs,
        kamkabelService
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        onCloseModal: () => dispatch(myCloseModal())
    }
  }

export default compose(
                    withKamkabelService(),
                    connect(mapStateToProps, mapDispatchToProps)
                )(ModalBootstrap);