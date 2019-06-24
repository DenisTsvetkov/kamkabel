import React, { Fragment, Component } from 'react';
import MessageList from '../message-list';


import { connect } from 'react-redux';
import { compose } from '../../utils';

class MessagesPage extends Component{
  render() {
    return (
      <Fragment>
        <div className="col-10">
          <div className="messages">
            <h5>Отправленные сообщения:</h5>
            <MessageList />
          </div>
        </div>
      </Fragment>
    )
  }
}



export default MessagesPage;