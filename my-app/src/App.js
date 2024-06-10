import React from 'react';
import Register from './components/Register/Register';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <h1 className='disk'>🆉🅰🆁🅴🅶🅸🆂🆃🆁🅸🆁🆄🆈🆃🅴🆂</h1>
      <Register />
    </Provider>
  );
};

export default App;

