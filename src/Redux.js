import React from 'react';

import {connect} from 'react-redux';

import './App.css';

import {increment, decrement, double, reset} from './index'

function Redux(props) {
    return (
        <div className="App col-sm-4">

            <h2>*Redux</h2>
            <h1>{`Count ${props.count}`}</h1>
            <button className = 'btn btn-success' onClick = {props.increment}>+1</button>
            <button className = 'btn btn-warning' onClick = {props.decrement}>-1</button>
            <button className = 'btn btn-primary' onClick = {props.double}>x2</button>
            <button className = 'btn btn-danger' onClick = {props.reset}>Reset</button>

            <h5>*Share same 'Redux Store'</h5>
        </div>
    );
}

function mapStateToProps(state){
    return {
        count: state
    }
}

const mapDispatchToProps = {
    increment: increment,
    decrement: decrement,
    double: double,
    reset: reset
}



export default connect(mapStateToProps, mapDispatchToProps)(Redux);
