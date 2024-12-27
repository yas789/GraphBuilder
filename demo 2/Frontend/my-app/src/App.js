import './App.css';
import { useState } from 'react';
function Square({value}) {
  const [values , setValue] = useState(null);
  function onclick (){
    setValue(value);
    console.log(`Square clicked with value: ${value}`);
  }

  return <button className = "square" onClick={onclick} > {values}</button>
}
function Reset(){
  function reset(){
    console.log('Reset button clicked');
  }
  return <button classname = "button" onClick={reset}> </button>
}


export default function Board(){
  const[bools , setBools]  = useState(true);
  const [value , setValue] = useState(null);
  function handleClick() {
    if(bools){
      setValue('O');
      setBools(false);
    }
    else{
      setValue('X');
      setBools(true);
    }
  }
  return (
<div className = "container" onClick={handleClick}>
    <div className = "board-row" >
      <Square onClick={handleClick} value={value} />
      <Square onClick={handleClick} value={value}/>
      <Square onClick={handleClick} value={value}/>
    </div>
    <div className = "board-row">
    <Square onClick={handleClick} value={value} />
    <Square onClick={handleClick} value={value} />
    <Square onClick={handleClick} value={value} />
    </div>
    <div className = "board-row">
    <Square onClick={handleClick} value={value} />
    <Square onClick={handleClick} value={value} />
    <Square onClick={handleClick} value={value} />
    </div>
    <div className = "reset">
    <Reset/>
    </div>

</div>
  )
}

