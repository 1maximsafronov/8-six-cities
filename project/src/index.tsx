import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {store} from './store/index';
import { fetchHotels, checkAuthAction } from 'store/api-actions';

store.dispatch(fetchHotels());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
