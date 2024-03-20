import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]  = useState(15) // useState() means state change and then propoget into the UI.  // set counter is a method which is control the variable(counter) in the UI.
  // let[val , setValInUI] = useState(value)  // value = '', true, false , 10 , "madhav", object, Array,  function .. etc

  const addValue = () => {
    if(counter < 20){
    setCounter(counter + 1)
    }else{
      console.log('Sorry!')
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log('Sorry!') 
    } else {
      
    }
  }
  
  return (
    <>
      <h1> Why we use the Hooks.</h1>
      <h2> Counter Number is : {counter} </h2>
      
      <button onClick={addValue}> Add Values {counter} </button> <br/>
      <button onClick={removeValue}> Remove Values {counter} </button>
    </>
  )
}

export default App
