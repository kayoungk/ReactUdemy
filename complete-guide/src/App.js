import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';// Use uppercase. Lowercase is reserved for JSX.

const app = (props) => {
  const [ personsState, setPersonsState ] = useState({ //setPersonsState updates all states, takes two parameters
    persons:[
    {name: 'Kayoung', age: 24 },
    {name: 'Kaiqi', age: 25 },
    {name: 'Wanan', age: 4}
    ]
    });

const [otherState, setOtherState] = useState('some other value'); 
//useState can be used many times, as state hooks don't allow state merge, they only replace

console.log(personsState,otherState);

const switchNameHandler = () => {
  //console.log('Was Clicked!');    
  // DO NOT DO THIS: personsState.persons[0].name = 'Kayoung KIM';
  setPersonsState({ //useState set function
    persons: [
      {name: 'HUHUHU', age: 24 },
      {name: 'Kaiqi', age: 25 },
      {name: 'Wanan', age: 4}
    ]
  })
}

    return (
      <div className="App">
        <h1> Hi, I'm a React App.</h1>
        <p>This is really working.</p>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobby is coding.</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobby is racing.</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: "App"}, React.createElement('h1',null, 'The same effect'))
  }

export default app;




