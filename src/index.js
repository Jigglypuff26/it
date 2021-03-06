import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { rootReduser } from './redux/rootReduser'

const storage = createStore(rootReduser, compose(
  applyMiddleware(
    thunk,
    ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storage}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
