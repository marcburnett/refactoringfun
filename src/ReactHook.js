import React from 'react'
import {useState} from 'react'

import './App.css';

function ReactHook() {

const [count, setCount] = useState(0)

function increment(){
setCount(count + 1)
}

function decrement(){
    setCount(count - 1)
    }

    function double(){
        setCount(count * 2)
        }

        function reset(){
            setCount(0)
            }
    return (
        <div className="App col-sm-4">

            <h2>React Hook</h2>
            <h1>{`Count: ${count}`}</h1>
            <button className = 'btn btn-success' onClick = {increment}>+1</button>
                <button className = 'btn btn-info' onClick = {decrement}>-1</button>
                <button className = 'btn btn-primary' onClick = {double}>x2</button>
                <button className = 'btn btn-danger' onClick = {reset}>Reset</button>

        </div>
    );
}

export default ReactHook;
