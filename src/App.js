import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor() {
	  super();
		this.changeNum = this.changeNum.bind(this);

	  this.state = {
	   num: 0
	  };
	}

  render() {
    return (
      <div>
        <span className="value">{this.state.num }</span>
        <button onClick={this.changeNum} id="inc">Incrementa</button>
      </div>
    );
  }

  changeNum() {
  	this.setState({
  		num: this.state.num+=1
  	});
  }
}

export default App;
