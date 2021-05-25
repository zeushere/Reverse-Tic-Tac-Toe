import { useEffect, useState } from "react";
import Window from "./Components/Window";

const initialState = ["","","","","","","","",""];

function App() {
  const [gameState,setGameState] = useState(initialState);
  const [IsXChance, setIsXChance] = useState(false)
  
  const onSquareClicked=(index) => {
  let strings = Array.from(gameState);
  strings[index] = IsXChance?"X" : "O"
  setGameState(strings);
  setIsXChance(!IsXChance);
  }
  const checkWinner = ()=>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  useEffect(() => {
  let winner  = checkWinner();
  if(winner) {
    winner ==='X' && alert(` O jest wygranym!`)
    winner ==='O' && alert(` X jest wygranym!`)
    setGameState(initialState)
  }
  },[checkWinner, gameState])

  

  return (
    <div className="app-header">
    <p className = "heading-text">Reverse Tic Tac Toe - Kacper Roda</p>
    <div className = "row jc-center">
    <Window className = "b-bottom-right" state={gameState[0]} onClick = {()=>onSquareClicked(0)}></Window>
    <Window className = "b-bottom-right" state={gameState[1]} onClick = {()=>onSquareClicked(1)}></Window>
    <Window className = "b-bottom" state={gameState[2]} onClick = {()=>onSquareClicked(2)}></Window>
    </div>
    <div className = "row jc-center">
    <Window className = "b-bottom-right" state={gameState[3]} onClick = {()=>onSquareClicked(3)}></Window>
    <Window className = "b-bottom-right" state={gameState[4]} onClick = {()=>onSquareClicked(4)}></Window>
    <Window className = "b-bottom" state={gameState[5]} onClick = {()=>onSquareClicked(5)}></Window>
    </div>
    <div className = "row jc-center">
    <Window className = "b-right" state={gameState[6]} onClick = {()=>onSquareClicked(6)}></Window>
    <Window className = "b-right" state={gameState[7]} onClick = {()=>onSquareClicked(7)}></Window>
    <Window state={gameState[8]} onClick = {()=>onSquareClicked(8)}></Window>
    </div>
    <button className = "clear-button" onClick = {() =>{setGameState(initialState)}}>Clear Game</button>
    <p>Kacper Roda</p>
    </div>
  );
}

export default App;
