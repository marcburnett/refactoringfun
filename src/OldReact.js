import React from 'react';

import './App.css';

class OldReact extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.double = this.double.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment(){
        this.setState( (state) => ({count: this.state.count + 1}));

    }

    decrement(){        
        this.setState( (state) => ({count: this.state.count - 1}));
    

    }

    double(){        
        this.setState( (state) => ({count: this.state.count * 2}));
    

    }

    reset(){        
        this.setState( (state) => ({count: 0}));
    

    }

    render() {
        return (
            <div className="App col-sm-4">

                <h2>Pure React</h2>
                <h1>{`Count: ${this.state.count}`}</h1>
                <button className = 'btn btn-success' onClick = {this.increment}>+1</button>
                <button className = 'btn btn-info' onClick = {this.decrement}>-1</button>
                <button className = 'btn btn-primary' onClick = {this.double}>x2</button>
                <button className = 'btn btn-danger' onClick = {this.reset}>Reset</button>

            </div>
        );
    }
}

export default OldReact;
