import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserItem from '../user-list-item';
import Spinner from '../spinner';

import { withKamkabelService } from '../hoc-helpers';
import { fetchUsers, showModal } from '../../actions';
import { compose } from '../../utils';

import './user-list.css';


const UserList = ({ users, onShowModalWindow }) => {
    return (
        
            <ul className="users-list">
                {
                    users.map((user) => {
                        return (
                            <li key={user.id}>
                                <UserItem user={ user } onShowModalWindow={ () => onShowModalWindow(user.Profile) }/>
                            </li>
                        );
                    })
                }
            </ul>

    )
}

class UserListContainer extends Component{

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        const { users, loading, onShowModalWindow } = this.props;

        if(loading){
            return <Spinner />
        }

        return <UserList users={ users } onShowModalWindow={ onShowModalWindow }/>
    }
}

const mapStateToProps = ({ userList:{ users, loading } }) => {
    return { users, loading }
}

const mapDispatchToProps = (dispatch, { kamkabelService }) => {
    return {
        fetchUsers: fetchUsers(kamkabelService, dispatch),
        onShowModalWindow: (id) => dispatch(showModal(id))
    }
}


export default compose(
                    withKamkabelService(),
                    connect(mapStateToProps, mapDispatchToProps)
                )(UserListContainer);
