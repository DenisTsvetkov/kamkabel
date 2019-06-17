import React from 'react';

import { Form } from 'react-bootstrap';

import './form-group.css';

const FormGroup = ({ label, input: { type, placeholder, name, required=false } }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={ type } name={ name } placeholder={ placeholder } required={ required } />
        </Form.Group>
    )
}

export default FormGroup;