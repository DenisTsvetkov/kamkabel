import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageItem from '../message-list-item';
import Spinner from '../spinner';

import { withKamkabelService } from '../hoc-helpers';

import { compose } from '../../utils';

import { fetchMessages } from '../../actions';

import './message-list.css';


const MessageList = ({ messages }) => {
    console.log('Ке-кей', messages)
    return (
        
            <ul className="users-list">
                {
                    messages.map((message) => {
                        return (
                            <li key={message.id}>
                                <MessageItem message={ message } />
                            </li>
                        );
                    })
                }
            </ul>

    )
}

class MessageListContainer extends Component{

    componentDidMount(){
        this.props.fetchMessages();
    }

    render(){
        console.log('иПропс: ', this.props);
        const { outgoingMessages, loading } = this.props;

        if(loading){
            return <Spinner />
        }

        return <MessageList messages={ outgoingMessages } />
    }
}

const mapStateToProps = ({ messageList:{ outgoingMessages, loading } }) => {
    return { outgoingMessages, loading }
}

const mapDispatchToProps = (dispatch, { kamkabelService }) => {
    return {
        fetchMessages: fetchMessages(kamkabelService, dispatch),
    }
}


export default compose(
                    withKamkabelService(),
                    connect(mapStateToProps, mapDispatchToProps)
                )(MessageListContainer);
