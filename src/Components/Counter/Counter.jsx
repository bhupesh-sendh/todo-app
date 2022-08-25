import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Counter.css'
class Counter extends Component{
    render(){
        return(
            <center>
            <h1>Counter</h1>
            <div className='Counter'>
                <CounterButton by={1}/>
                <CounterButton by={5}/>
                <CounterButton by={10}/>
            </div>
            </center>
            
        )
    }
}


class CounterButton extends Component{
    //Define the initial state in a constructor
    //state => counter=0
    constructor(){
        super()
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
    }

    render(){
        return(
            <div className='Counter'>
                <button onClick={this.increment}>+  {this.props.by}</button>
                <span className='count'>    {this.state.counter}</span>

            </div>
        )
    }

    increment() { //update state
        //console.log('increment')
        this.setState({
            counter:this.state.counter+this.props.by
        })


    }
}

export default Counter