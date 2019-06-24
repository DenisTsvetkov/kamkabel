import React, { Fragment } from 'react';
import './message-list-item.css'

const MessageListItem = ({ message }) => {

    const { text, createdAt, User: { username, UserAvatar:{ avatar }, Profile: {name, middle_name, surname} } } = message;

    return (
        <Fragment>
            <img src={ avatar } alt="" className="avatar"/>
            <div className="user-detail message-detail">
                <div className="name-phone">
                    <div className="name">Получатель: { name } {middle_name} { surname }</div>
                </div>
                
                <div className="message-text">
                    { text }
                </div>
                <div className="message-created-date">
                    { createdAt }
                </div>
            </div>
            
        </Fragment>
    )
}

export default MessageListItem;