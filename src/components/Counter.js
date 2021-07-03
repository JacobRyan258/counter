import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import './counter.css';


    
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

        reset() {
            this.setState({
                count: 0
            });
        }

        increment() {
            this.setState(state => ({
                count: state.count + 1
            }));
        }

        decrement() {
            this.setState(state => ({
                count: state.count -1
            }));
        }

    
    render() {
        return (
            <div style={{
                backgroundColor: 'lightblue',
                width: '100%',
                height: '100%'
            }}>
                <Button variant="contained" color="primary" onClick={this.increment}>Increment!</Button>
                <Button variant="contained" color="secondary" onClick={this.decrement}>Decrement!</Button>
                <Button variant="contained" color="default" onClick={this.reset}>Reset!</Button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
};

export default Counter;
