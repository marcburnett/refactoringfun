import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import './App.css';

import {increment, decrement, double, reset} from './index'

function Redux(props) {

    const count = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div className="App col-sm-4">

            <h2>*Redux Hook</h2>
            <h1>{`Count ${count}`}</h1>
            <button className = 'btn btn-success' onClick = {() => dispatch(increment())}>+1</button>
            <button className = 'btn btn-warning' onClick = {() => dispatch(decrement())}>-1</button>
            <button className = 'btn btn-primary' onClick = {() => dispatch(double())}>x2</button>
            <button className = 'btn btn-danger' onClick = {() => dispatch(reset())}>Reset</button>

            <h5>*Share same 'Redux Store'</h5>
        </div>
    );
}


export default Redux;
