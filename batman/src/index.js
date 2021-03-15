import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import './index.css';
import  App  from './App';
import configureStore, { history } from './store/configure_store';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import roots from './router/router'
import Spinner from './components/spinner.jsx';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App>
        <Suspense fallback={ <Spinner /> }>
          {
            roots
          }
        </Suspense>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
