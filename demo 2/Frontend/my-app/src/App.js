import './App.css';
import { useState } from 'react';
function Square({value , onSquareClick}) {
  return <button className = "square" onClick={onSquareClick} > {value}</button>
}



export default function Board(){
  const[squares, setSquares] = useState(Array(9).fill(null));

  function handleclick(i){
    const newSquares = squares.slice();
    newSquares[i] = 'X';
    setSquares(newSquares);

  }


  return (
<div className = "container">
    <div className = "board-row" >
      <Square value={squares[0]} onSquareClick={() => handleclick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleclick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleclick(2)}/>
    </div>
    <div className = "board-row">
    <Square value={squares[3]} onSquareClick={() => handleclick(3)}/>
    <Square value={squares[4]} onSquareClick={() => handleclick(4)}/>
    <Square value={squares[5]} onSquareClick={() => handleclick(5)}/>
    </div>
    <div className = "board-row">
    <Square value={squares[6]} onSquareClick={() => handleclick(6)}/>
    <Square value={squares[7]} onSquareClick={() => handleclick(7)}/>
    <Square value={squares[8]} onSquareClick={() => handleclick(8)}/>
    </div>

</div>
  )
}


