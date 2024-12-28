import './App.css';
import { useState } from 'react';
function Square({value , onSquareClick}) {
  const style = {
    color: value === 'X' ? 'red' : value === 'O' ? 'black' : 'inherit'
  };
  return <button className = 'square' onClick={onSquareClick} style={style} > {value}</button>
}

function Reset({onResetClick}){
  return (<button onClick={onResetClick}>Reset</button>)
}



export default function Board(){
  const[squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

function calculateWinner (){
  const lines= [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 5],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8]

  ]; 
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    // A player has won
    return squares[a];
}
}
return null;
}

  function handleclick(i){
    const newSquares = squares.slice();
    if(newSquares[i]){
      return;
    }
    if (xIsNext){
      newSquares[i] = 'X';
    }else{
      newSquares[i] = 'O';
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);

  }
  function handlereset(){
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
<div className = "container" onClick={calculateWinner}>
  <Reset onResetClick={() => handlereset}/>
    <div className = "board-row" >
      <Square value={squares[0]} onSquareClick={() => handleclick(0)} />
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


