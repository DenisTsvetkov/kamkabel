import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Header from '../header';
import Sidebar from '../sidebar';

import {
  UsersPage,
  LoginPage
} from '../pages';

import { Modal } from '../kb-components';

import './app.css';
import './animate.css';

// export default class App extends Component {

//   render() {
//     return (
//       // <ErrorBoundry>
//       //   <KamkabelServiceProvider value={this.state.kamkabelService}>
//       //     <Router>
//               <div className="messenger-managment-app">
                
//                 <Sidebar />

//                 <div className="content">
//                   <div className="container-fluid">
//                     <div className="row">
//                       <div className="col-12">
//                         <Header />
//                       </div>
                      
//                       <div className="col-12">

//                         <Switch>
//                           <Route path="/"
//                                   render={() => <h2>Добро пожаловать в систему управления ботом мессенджера</h2>}
//                                   exact />
//                           <Route path="/users" component={ UsersPage } />
//                           <Route path="/login" component={ LoginPage } />
//                           <Route render={() => <h2>Page not found</h2>} />
//                         </Switch>
                        
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//       //     </Router>
//       //   </KamkabelServiceProvider>
//       // </ErrorBoundry>
//     );
//   }
// }


const App = ({kamkabelService}) => {

  return (
    <div className="messenger-managment-app">        
      <Sidebar />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
            <div className="col-12">
              <Modal />
              <Switch>
                <Route path="/"
                        render={() => <h2>Добро пожаловать в систему управления ботом мессенджера</h2>}
                        exact />
                <Route path="/users" component={ UsersPage } />
                <Route path="/login" component={ LoginPage } />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;