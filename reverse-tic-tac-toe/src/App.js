import { useCallback, useEffect, useState } from "react";
import Window from "./Components/Window";

const initialState = ["","","","","","","","",""];

function App() {
  const [gameState,setGameState] = useState(initialState);
  const [IsXChance, setIsXChance] = useState(false)
  const [counter,setCounter] = useState(0);
  const [displayChooseChar,setDisplayChooseChar] = useState(true);
  const [whichMove,setWhichMove] = useState('player');
  const [displayBoard,setDisplayBoard] = useState(false);
  const [displayChooseStart,setDisplayChooseStart] = useState(false);
  const [call,setCall] = useState(0);
  const oppositeMove = {
    0:8,
    1:7,
    2:6,
    3:5,
    5:3,
    6:2,
    7:1,
    8:0,
  };
  const dictUserStartOnEdgeFirstStep = {
    1:[3,5],
    3:[1,7],
    5:[1,7],
    7:[3,5],
  };
  const dictUserStartOnEdgeSecondStep = {
    3:5,
    5:3,
    1:7,
    7:1,
  };
  const placeWithoutCenter = [0,1,2,3,5,6,7,8];



  let strings = Array.from(gameState);
  const userFirstStart = useCallback (()=>{
    if(counter === 1 && whichMove === 'computer' && call === 0) {
      if(IsXChance) {
        if(strings[4] === '') {
        
          strings[4] = 'X';
          setWhichMove('player')
    setGameState(strings)
    setCounter(counter + 1)
        }
        else{
          strings[placeWithoutCenter[[Math.floor(Math.random() * placeWithoutCenter.length)]]] = 'X';
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
        }
      }
      if(!IsXChance) {
        if(strings[4] === '') {
          
          strings[4] = 'O';
          setWhichMove('player')
    setGameState(strings)
    setCounter(counter + 1)
        }
        else{
          strings[placeWithoutCenter[[Math.floor(Math.random() * placeWithoutCenter.length)]]] = 'O';
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
        }
      }

      
      
    }
    if(counter === 3 && whichMove === 'computer' && call === 0) {
      if(IsXChance) {

      }

      if(!IsXChance) {
        
      }

    }

  },[call, counter, whichMove])
  const chooseButtonX = () => {
    setIsXChance(true);
    setDisplayChooseChar(false)
    setDisplayChooseStart(true)
  }
  const chooseButtonY = () => {
    setIsXChance(false)
    setDisplayChooseChar(false)
    setDisplayChooseStart(true)

  }

  const choosePlayer = () => {
    setWhichMove('player')
    setDisplayChooseStart(false)
    setDisplayBoard(true)
  }
  const chooseComputer = () => {
    setWhichMove('computer')
    setDisplayChooseStart(false)
    setDisplayBoard(true)
    computerFirstMove()
  }

  const onSquareClicked = (index) => {
    if(whichMove === 'player') {
    if (strings[index]) return;
    strings[index] = IsXChance ? 'X' : 'O';
    setIsXChance(!IsXChance)
    
    setGameState(strings)
    setCounter(counter + 1)
    whichMove === 'player' &&  setWhichMove('computer')
    console.log(counter)

  }}
    const reset = () =>{
    setGameState(initialState);
    setCounter(0);
    setCall(0)
    setDisplayChooseChar(true)
    setDisplayBoard(false)
  }
  
  const computerFirstMove = () => {
      strings[4] = IsXChance ? "O" : "X";
    setWhichMove('player')
    setGameState(strings)
    setCounter(counter + 1)
    setCall(call + 1)

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

  const whenComputerFirstStart = useCallback (()=>{
    if(whichMove==='computer' && call === 1) {
      for(let i = 0; i < strings.length; i++) {
        if(!IsXChance)
       {
         if(strings[i] === 'X') {
          if (strings[oppositeMove[i]]) continue;
          strings[oppositeMove[i]] =  'O';
          setWhichMove('player')
        setGameState(strings)
        setCounter(counter + 1)
        setIsXChance(true)
         }
      }
      if(IsXChance)
      {
        if(strings[i] === 'O') {
         if (strings[oppositeMove[i]]) continue;
         strings[oppositeMove[i]] =  'X';
         setWhichMove('player')
       setGameState(strings)
       setCounter(counter + 1)
       setIsXChance(false)
      }
     }
    }
    }
  },[IsXChance, call, counter, oppositeMove, strings, whichMove])
  
  useEffect(() => {
    const timer = setTimeout(()=>{whenComputerFirstStart()},1000)
  userFirstStart()
    
  let winner  = checkWinner();
  
  
  if (winner) {
      
      winner === 'O' && alert(`X WYGRYWA!`)
      winner === 'X' && alert(`O WYGRYWA!`)
      reset();
  }

  if(counter === 9){  
    reset();
    alert('Mamy remis!')
    
}
return () => clearTimeout(timer);
}, [counter])

  

  return (
    
    <div className="mt-1 container-sm text-center">
   
    <span className= "display-6">Odwrotne Kółko i Krzyżyk - Kacper Roda</span>
    <div  style={{display: displayChooseChar? "block":"none" }}  id  = "charDecision"><strong>Wybierz czym chcesz zagrac! </strong><button className = "btn btn-primary mr-2" onClick = {() => chooseButtonY(false)} name = "O">O</button>
    <button className = "btn btn-primary" name="X" onClick = {() => chooseButtonX()}>X</button>
    </div>
    <div className = "mt-2" style={{display: displayChooseStart? "block":"none" }}  id  = "startDecision"><strong>Kto zaczyna? </strong><button className = "btn btn-primary mr-2" onClick = {() => choosePlayer()} name = "player">Ty</button>
    <button className = "btn btn-primary" name="computer" onClick = {() => chooseComputer()}>Komputer</button>
    </div>
    <div style={{display: displayBoard? "block":"none" }}  id  = "whichMove"><strong>{whichMove === 'player' && <span>Oczekiwanie na Twój ruch!</span>} {whichMove === 'computer' && <span>Oczekiwanie na ruch komputera!</span>}</strong>
    </div>
    <br/>
    <div className = "displayBoard" style = {{display: displayBoard? "inline" : "none"}}>
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
      <div>
      <button className = "btn btn-primary clear-button" onClick = {() => reset()}>Clear Game</button>
      </div>
      </div>
      </div>

  );
}

export default App;
