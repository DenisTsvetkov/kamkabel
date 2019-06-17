import React, { Component } from 'react';

import Header from '../header';

import ErrorBoundry from '../error-boundry';


export default class LoginPage extends Component {

  state = {
    
  }

  render() {
    return (
      <ErrorBoundry>
            <div className="messenger-managment-app">

              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <Header />
                    </div>
                    
                    <div className="col-12">

                     <h2>Вы не залогинены</h2>

                    </div>
                  </div>
                </div>
              </div>
            </div>
      </ErrorBoundry>
    );
  }
}
