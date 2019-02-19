import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';// Use uppercase. Lowercase is reserved for JSX.

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App.</h1>
        <p>This is really working.</p>
        <h1>Test</h1>
        <Person name="Kayoung" age="24"/>
        <Person name="Kaiqi" age="25" > My hobby is racing.</Person>
        <Person name="Wanwan" age="4"/>
      </div>
    );
    // return React.createElement('div',{className: "App"}, React.createElement('h1',null, 'The same effect'))
  }
}

export default App;
