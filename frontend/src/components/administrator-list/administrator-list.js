import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import { withKamkabelService } from '../hoc-helpers';
import { compose } from '../../utils';
import { fetchAdministrators } from '../../actions';

import { Table } from 'react-bootstrap';
import './administrator-list.css';

const AdministratorList = ({ administrators, onShowModalWindow }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Логин</th>
                <th>Действие</th>
                </tr>
            </thead>
            <tbody>
                {
                    administrators.map((administrator, idx) => {
                        const { name, surname, Auth_datum: { login } } = administrator
                        return (
                            <tr key={ idx+1 }>
                                <td>{ idx+1 }</td>
                                <td>{ name }</td>
                                <td>{ surname }</td>
                                <td>{ login }</td>
                                {/* onShowModalWindow={ () => onShowModalWindow(user.Profile) } */}
                                {/* <UserItem administrator={ administrators } /> */}
                            </tr>
                        );
                    })
                }
              </tbody>
            </Table>
    )
}

class AdministratorListContainer extends Component{

    componentDidMount(){
        this.props.fetchAdministrators();
    }

    render(){
        const { administrators, loading, onShowModalWindow } = this.props;

        if(loading){
            return <Spinner />
        }
        // onShowModalWindow={ onShowModalWindow }
        return <AdministratorList administrators={ administrators } />
    }
}

const mapStateToProps = ({ administratorList:{ administrators, loading } }) => {
    console.log('Админы из state', administrators);
    return { administrators, loading }
}

const mapDispatchToProps = (dispatch, { kamkabelService }) => {
    return {
        fetchAdministrators: fetchAdministrators(kamkabelService, dispatch),
        //onShowModalWindow: (id) => dispatch(showModal(id))
    }
}


export default compose(
                    withKamkabelService(),
                    connect(mapStateToProps, mapDispatchToProps)
                )(AdministratorListContainer);