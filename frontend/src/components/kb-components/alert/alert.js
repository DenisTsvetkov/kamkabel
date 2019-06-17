import React, { Component } from 'react';

import { Alert, Button } from 'react-bootstrap'

import { connect } from 'react-redux';

import { compose } from '../../../utils';

import './alert.css'

class AlertBootstrap extends Component{
    
    componentDidUpdate(){
        setTimeout(()=>{
            this.props.onCloseAlert()
        }, 4000)
    }

    render() {
        const {show, headerText, text, type} = this.props;
        return (
            <div className="notification">
                <Alert show={show} variant={type}>
                    <Alert.Heading>{ headerText }</Alert.Heading>
                    <p>
                        { text }
                    </p>
                </Alert>
            </div>
            
        )
    }
}

const mapStateToProps = ({ alert: {show, headerText, text, type} }) => {
    return {
        show, headerText, text, type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseAlert: () => dispatch({type:'CLOSE_ALERT'})
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AlertBootstrap)