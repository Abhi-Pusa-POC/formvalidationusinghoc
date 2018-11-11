import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import higherOrderComponent from './higherordercomponent';
import MyComponent from './MyComponent';
// import MyComponent2 from './MyComponent2';
import formHighOrderComponent from './Form';

// const SimpleHOC = higherOrderComponent(MyComponent);
// const SimpleHOC1 = higherOrderComponent(MyComponent2);

const ValidateComponent = formHighOrderComponent(MyComponent);

class App extends Component {
  constructor(){
    super();
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onSubmitHandler(){
    console.log("this on submit method is called");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <SimpleHOC props={{data1:"london",data2:"wall"}}/>
          <SimpleHOC1 props={{data1:"upton",data2:"park"}}/> */}
          <ValidateComponent submit={this.onSubmitHandler} props={{data1:"london",data2:"wall"}} />
        </header>
      </div>
    );
  }
}

export default App;
