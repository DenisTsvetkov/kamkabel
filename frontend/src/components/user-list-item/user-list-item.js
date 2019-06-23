import React, { Fragment } from 'react';

const UserListItem = ({ user, onShowModalWindow }) => {
    
    const defaultAvatar = 'https://avatars.servers.getgo.com/2205256774854474505_medium.jpg';

    const { username, UserAvatar, Profile : { name, middle_name, surname, phone, sex } } = user;
    const userPhoto = UserAvatar ? UserAvatar.avatar :  defaultAvatar;

    const userPhone = phone && `( тел.: ${ phone } )`;
    return (
        <Fragment>
            <img src={ userPhoto } alt="" className="avatar"/>
            <div className="user-detail">
                <div className="name-phone">
                    <div className="name">{ name } {middle_name} { surname }</div>
                    <div className="phone">{ userPhone }</div>
                </div>
                <div className="username">{ username }</div>

                <button 
                    onClick={ onShowModalWindow }
                    className="btn btn-primary send-message">Отправить сообщение
                </button>
            </div>
            
        </Fragment>
    )
}

export default UserListItem;