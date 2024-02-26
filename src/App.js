import './App.css';
import { useState, useEffect } from 'react';

const Person = (props) => {

  return (
    <>
    <p>{props.name + " " + props.surname}</p>
    <p>{props.age}</p>
    </>
  )
}

const ButtonComponent = () => {
  // function starting with use is a hook
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // counter = 100 BIG ERROR - never modify the state manually
    setCounter(100);
    // video 39min
  }


  )

  return (
    <>
    <button onClick={() =>{setCounter(counter - 1)}}>-</button>
    <h1>{counter}</h1>
    <button  onClick={() =>{setCounter((nextCounter)=> nextCounter+1)}}>+</button>
    
    </>
  )
}

const App = () => {
  const name = 'Selma';
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>
        Hello, {isNameShowing ? name: 'someone'}
      </h1>

      <div>
        <Person name='Selma' age={20+9} surname={'Repuh'}/>
      </div>
      
      {name ? (
        <>
          TEST
        </>):(
        <>
          TEST 2
        </>
        )}

        <div>
          <ButtonComponent/>
        </div>
    </div>
  );
}

export default App;
