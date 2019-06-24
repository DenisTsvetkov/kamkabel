import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

// import { Form, Button } from 'react-bootstrap'; 

import Header from '../header';
import Sidebar from '../sidebar';

import {
  UsersPage,
  LoginPage,
  SettingsPage
} from '../pages';

import { ModalSendMessage, Alert, Form } from '../kb-components';

import { compose } from '../../utils';
import { withKamkabelService } from '../hoc-helpers';

import './app.css';
import './animate.css';

const App = (props) => {
  //kamkabelService = this.props.kamkabelService;

  if(props.kamkabelService.getServerDataExist()){
  return (
      <div className="messenger-managment-app">        
        <Sidebar />
        <div className="content">
          <div className="container-fluid">
          <Alert />
            <div className="row">
              <div className="col-12">
                <Header />
              </div>
              
                <ModalSendMessage />
                
                <Switch>
                  <Route path="/"
                          render={() => <h2>Добро пожаловать в систему управления ботом мессенджера</h2>}
                          exact />
                  <Route path="/users" component={ UsersPage } />
                  <Route path="/settings" component={ SettingsPage } />
                  <Route path="/login" component={ LoginPage } />
                  <Route render={() => <h2>Page not found</h2>} />
                </Switch>
                
              
            </div>
          </div>
        </div>
      </div>
    )
  }
  else{
    return(
      <div className="messenger-managment-app">        
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Header />
              </div>
              <div className="col-12 m-auto text-center">
                <h2>Произведем первоначальную настройку</h2>
              </div>
              <div className="col-4 m-auto">
                <Form />
                {/* <Switch>
                  <Route path="/"
                          render={() => <h2>Добро пожаловать в систему управления ботом мессенджера</h2>}
                          exact />
                  <Route path="/users" component={ UsersPage } />
                  <Route path="/login" component={ LoginPage } />
                  <Route render={() => <h2>Page not found</h2>} />
                </Switch> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default compose(
  withKamkabelService()
)(App);