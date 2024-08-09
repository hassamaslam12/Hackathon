import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './config/AppRouter';
import { Provider } from 'react-redux';
import store from './config/redux/Store';

function App() {
  return (
    <Provider store={store}>

   <AppRouter />
    </Provider>
  );
}

export default App;
