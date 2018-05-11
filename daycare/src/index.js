import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import { addStudent, addDiapering, addFeeding, addNap, addMeds, addComments, addSupplies, removeStudent, addPlayTime, studentStatus } from './actions/index'


ReactDOM.render(<BrowserRouter>
      <Provider store={store}>
            <App />
      </Provider>
</BrowserRouter>, document.getElementById('root'));

