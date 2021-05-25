import { useCallback, useEffect, useState } from "react";
import Window from "./Components/Window";

const initialState = ["","","","","","","","",""];

function App() {
  const [gameState,setGameState] = useState(initialState);
  const [IsXChance, setIsXChance] = useState(false)
  const [counter,setCounter] = useState(0);
  const status = 'Następny gracz: ' + (IsXChance ? 'X' : 'O');

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index])
        return;
    strings[index] = IsXChance ? "X" : "0";
    setIsXChance(!IsXChance)
    setGameState(strings)
  }
    const reset = () =>{
    setGameState(initialState);
    setCounter(0);
  }

  const checkWinner = useCallback(
    () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
        else if(counter === 9)
        return 0;
    }},
    [gameState, counter],
  );


  useEffect(() => {
    
  let winner  = checkWinner();
  
  if (winner) {
      reset();
      alert(`Ta da ! ${winner} won the Game !`)
  }

  if(counter.checkWinner === 9){  
    alert('Mamy remis!')
    setGameState(initialState)
    setCounter(0)
}

}, [gameState])

  

  return (
    
    <div className="container-sm">
    <span className = "heading-text">Reverse Tic Tac Toe - Kacper Roda
    </span>
    <span style = {{marginBottom: "50px"}}>{status}</span>
   <span className = "winner"></span>

      <div className = "row justify-content-center">
      <Window className = "col-2 b-top b-left b-right b-bottom d-flex justify-content-center" state={gameState[0]} onClick = {()=>onSquareClicked(0)}></Window>
      <Window className = "col-2 b-top b-right b-bottom d-flex justify-content-center" state={gameState[1]} onClick = {()=>onSquareClicked(1)}></Window>
      <Window className = "col-2 b-top b-right b-bottom d-flex justify-content-center" state={gameState[2]} onClick = {()=>onSquareClicked(2)}></Window>
      </div>
      <div className = "row justify-content-center">
      <Window className = "col-2 b-left b-right b-bottom d-flex justify-content-center" state={gameState[3]} onClick = {()=>onSquareClicked(3)}></Window>
      <Window className = "col-2 b-right b-bottom d-flex justify-content-center" state={gameState[4]} onClick = {()=>onSquareClicked(4)}></Window>
      <Window className = "col-2 b-right b-bottom d-flex justify-content-center" state={gameState[5]} onClick = {()=>onSquareClicked(5)}></Window>
      </div>
      <div className = "row justify-content-center">
      <Window className = "col-2 b-left b-right b-bottom d-flex justify-content-center" state={gameState[6]} onClick = {()=>onSquareClicked(6)}></Window>
      <Window className = "col-2 b-right b-bottom d-flex justify-content-center" state={gameState[7]} onClick = {()=>onSquareClicked(7)}></Window>
      <Window className = "col-2 b-bottom b-right d-flex justify-content-center" state={gameState[8]} onClick = {()=>onSquareClicked(8)}></Window>
      </div>
      <button className = "clear-button" onClick = {() => reset()}>Clear Game</button>
      </div>

  );
}

export default App;
