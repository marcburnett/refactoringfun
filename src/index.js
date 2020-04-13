import React from 'react';
import ReactDOM from 'react-dom';
 
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import Redux from './Redux';
import ReduxHook from './ReduxHook';
import Notes from './Notes';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Redux />
    <ReduxHook />
    
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

export function increment(){
  return{
      type: 'ADD'
  }
}

export function decrement(){
  return{
      type: 'TAKE'
  }
}

export function double(){
  return{
      type: 'DOUBLE'
  }
}

export function reset(){
  return{
      type: 'RESET'
  }
}

export function reducer(count = 0, action){
  switch(action.type){

      case 'ADD':
          return count + 1;

      case 'TAKE':
          return count - 1;

      case 'DOUBLE':
          return count * 2;

      case 'RESET':
          return 0;

      default:
          return count

  }

  
}

export default store;
