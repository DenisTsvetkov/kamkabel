import React, { Fragment, Component } from 'react';
import AdministratorList from '../administrator-list';
import Modal from '../kb-components/modal';
import { showModalAddAdministrator } from '../../actions';

import { connect } from 'react-redux';
import { compose } from '../../utils';

class SettingsPage extends Component{
  render() {
    const { modalAdd } = this.props; 
    return (
      <Fragment>
        <div className="col-12">
          <Modal />
        </div>
        <div className="col-10">
          <AdministratorList />
          <button className="btn btn-primary" onClick={ modalAdd }>Добавить администратора</button>
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalAdd: () => dispatch(showModalAddAdministrator())
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(SettingsPage);