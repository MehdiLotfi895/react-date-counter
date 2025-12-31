import { useState } from "react";
import "./App.css";
function App(){
  const[step,setStep]=useState(1);
  const[count,setCount]=useState(0);
  let message;
  function stepIncreases(){//
    setStep(step+1);
  }
  function stepDecreases(){//
    setStep(step-1);
  }
  function countIncreases(){
    setCount(prve=>prve+step);}
  function countDecreases(){
    setCount(prve=>prve-step);}
  
  let date=new Date();
  date.setDate(date.getDate()+count);
  
    if(count>0){
      message=`${count}days from today is ${date.toDateString()}`;
    }
    if(count<0){
      message=`${Math.abs(count)} days ago was ${date.toDateString()}`;
    }
    if(count==0){
      message=`today is ${date.toDateString()}`;
    }
    
  
  
  return (
    <div id='container'>
      <div>
        <button className="button" onClick={stepDecreases}>-</button>
        Step:{step}
        <button className="button" onClick={stepIncreases}>+</button>
      </div>
      <div>
        <button className="button" onClick={countDecreases}>-</button>
        Count:{count}
        <button className="button" onClick={countIncreases}>+</button>
      </div>
      <div id="date">
       {message} 
      </div>
    </div>
    
  )
}

export default App;