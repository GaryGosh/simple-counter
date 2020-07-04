import React, { Component } from 'react'
import './App.css';
import Counter from "./component/Counter";
export default class App extends Component {
  
  
  render() {
    
    return (
      <div className="App">
        <h2 style={{color: 'white', fontSize: '3em'}}>Simple Counter</h2>
        <Counter/>
        
        
      </div>
    );
  }
}