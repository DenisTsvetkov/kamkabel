import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import KamkabelApiService from './services/kamkabel-service';
import DummyKamkabelApiService from './services/dummy-kamkabel-service';

import { KamkabelServiceProvider } from './components/kamkabel-service-context';

import store from './store';

const KamkabelService = new KamkabelApiService();
//const DummyKamkabelService = new DummyKamkabelApiService();

ReactDOM.render(
  <Provider store={ store }>
    <ErrorBoundry>
      <KamkabelServiceProvider value={ KamkabelService }>
        <Router>
          <App />
        </Router>
      </KamkabelServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(<App />,
//   document.getElementById('root'));