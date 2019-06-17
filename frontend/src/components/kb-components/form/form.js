import React from 'react';

import { compose } from '../../../utils';

import { connect } from 'react-redux';

import FormGroup from '../form-group';

import { sendFormUserInfo } from '../../../actions';

import { withKamkabelService } from '../../hoc-helpers';

import { Form, Button } from 'react-bootstrap';
import './form.css';

const createInputs = (inputGroups) => {
    return (
        inputGroups.map(({ label, type, placeholder, name, required }, idx) => {
            return (
                <FormGroup key={ idx } label={ label } input={ { type, placeholder, name, required } }/>
            );
        }) 
    )
}

const FormBootstrap = ({ inputGroups, button: { variant, text, onClickFunction }, formNotification, kamkabelService, dispatch }) => {

    const inputs = createInputs(inputGroups);
    
    return (
        <Form onSubmit={ (e) => dispatch(onClickFunction(e, kamkabelService)) }>
            { inputs }

            <div>
                { formNotification.text }
            </div>
            <Button variant={ variant } type="submit">
                { text }
            </Button>
        </Form>
    )
}

const mapStateToProps = ({ form: { inputGroups, button, formNotification }}, { kamkabelService }, dispatch) => {
    console.log('Сервис подключен ', kamkabelService);
    return {
        inputGroups,
        button,
        formNotification,
        kamkabelService, 
        dispatch
    }
}

// const mapDispatchToProps = (dispatch, { onClickFunction }) => {
//     console.log(onClickFunction)
//     return {
//         onClickF: (e) => dispatch(onClickFunction(e))
//     }
// }

export default compose(
    withKamkabelService(),
    connect(mapStateToProps)
)(FormBootstrap)
