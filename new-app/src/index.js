import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Route } from 'react-router-dom';

import {createStore} from 'redux';
import store from './redux/store';
import { Provider } from 'react-redux';

import './sass/style.sass';
import App from './App';

const User = React.createContext({})
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <Route>
    <Provider store = {store}>
    <App />
    </Provider>
  </Route>  
</React.StrictMode>
);

