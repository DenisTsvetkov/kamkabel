import React, { Fragment } from 'react';

const UserListItem = ({ user, onShowModalWindow }) => {
    
    const { name, surname, username } = user;
    
    return (
        <Fragment>
            <img src="" alt="" className="avatar"/>
            <div className="name">{ name } { surname }</div>
            <div className="username">{ username }</div>
            <div className="phone">79125998779</div>
            <button 
                onClick={ onShowModalWindow }
                className="btn btn-primary">Отправить сообщение
            </button>
        </Fragment>
    )
}

export default UserListItem;