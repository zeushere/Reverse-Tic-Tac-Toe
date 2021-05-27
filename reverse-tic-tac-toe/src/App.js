import { useCallback, useEffect, useState } from "react";
import Window from "./Components/Window";

const initialState = ["","","","","","","","",""];
const initialPlaces = [0,1,2,3,4,5,6,7,8];

function App() {
  const [gameState,setGameState] = useState(initialState);
  const [IsXChance, setIsXChance] = useState(false)
  const [counter,setCounter] = useState(0);
  const [displayChooseChar,setDisplayChooseChar] = useState(true);
  const [whichMove,setWhichMove] = useState('player');
  const [displayBoard,setDisplayBoard] = useState(false);
  const [displayChooseStart,setDisplayChooseStart] = useState(false);
  const [call,setCall] = useState(0);
  const [places,setPlaces] = useState(initialPlaces);
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
  

  const busyPlace = (index) =>{ 
    setPlaces(places.filter(place => place !== index));
  }

  const bestMoveFive = (index, char) => {
    for(let j = 0; j<places.length; j++){
      
    switch(places[j]) {
      case 0: {
      
        if((strings[1] !== char)  || (strings[3] !== char)) { strings[places[j]] = char;
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          busyPlace(places[j])
          console.log("hello0")
          console.log(places)
          if(char === 'X') {
            setIsXChance(false)
          }
          else if(char === 'O') {
            setIsXChance(true)
          }

          j= places.length+1
        
        }
        
          
      
   
      break;
    }
    
      case 1: {
      
        if((strings[0] !== char)  || (strings[2] !== char)) { strings[places[j]] = char;
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          busyPlace(places[j])
          console.log("hello1")
          console.log(places)
          if(char === 'X') {
            setIsXChance(false)
          }
          else if(char === 'O') {
            setIsXChance(true)
          }
          j= places.length+1
          }
        
        
       
        break;
      }
      
      case 2: {
      
        if((strings[1] !== char)  || (strings[5] !== char)) { strings[places[j]] = char;
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          busyPlace(places[j])
          console.log("hello2")
          console.log(places)
          if(char === 'X') {
            setIsXChance(false)
          }
          else if(char === 'O') {
            setIsXChance(true)
          }
          j= places.length+1
         }
        
        
          break;
        
      }
      case 3: {
      
        if((strings[0] !== char)  || (strings[6] !== char)) { strings[places[j]] = char;
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          busyPlace(places[j])
          console.log("hello3")
          console.log(places)
          if(char === 'X') {
            setIsXChance(false)
          }
          else if(char === 'O') {
            setIsXChance(true)
          }
          j= places.length+1
          }
        
        
          break;
        }
      case 5: {
      
        if((strings[2] !== char)  || (strings[8] !== char)) { strings[places[j]] = char;
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          busyPlace(places[j])
          console.log("hello5")
          console.log(places)
          if(char === 'X') {
            setIsXChance(false)
          }
          else if(char === 'O') {
            setIsXChance(true)
          }
          j= places.length+1
          }
        
         
          break;
        }
      
      
      case 6: {
      
        if((strings[3] !== char)  || (strings[7] !== char)) { strings[places[j]] = char;
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          busyPlace(places[j])
          console.log("hello6")
          console.log(places)
          if(char === 'X') {
            setIsXChance(false)
          }
          else if(char === 'O') {
            setIsXChance(true)
          }
          j= places.length+1
        }
        
        
      
        break;
      }
      case 7: {
      
        if((strings[6] !== char)  || (strings[8] !== char)) { strings[places[j]] = char;
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          busyPlace(places[j])
          console.log("hello7")
          console.log(places)
          if(char === 'X') {
            setIsXChance(false)
          }
          else if(char === 'O') {
            setIsXChance(true)
          }
          j= places.length+1
          }
        
        
      
          break;
        }
      case 8: {
      
        if((strings[7] !== char)  || (strings[5] !== char)) { strings[places[j]] = char;
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          busyPlace(places[j])
          console.log("hello8")
          console.log(places)
          if(char === 'X') {
            setIsXChance(false)
          }
          else if(char === 'O') {
            setIsXChance(true)
          }
          j= places.length+1
         }
      
       
        break;
      }
      default: {
        console.log("brak ruchu")
    }
  
  }

    }
    // const bestMoveFive = (index, char) => {
    //   for(let j = 0; j<places.length; j++){
    //   switch(places[j]) {
    //     case 0: {
    //       if((strings[1] === char && strings[2] === char) || (strings[3] === char  && strings[6] === char) || (strings[4] === char  && strings[8] === char)){
          
    //         strings[places[j]] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //       else {
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //     break;
    //     }
    //     case 1: {
    //       if((strings[0] === char && strings[2] === char) || (strings[4] === char  && strings[7] === char)){
    //         newIndex = places[Math.floor(Math.random() * places.length)]
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //       else {
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //     break;
    //     }
    //     case 2: {
    //       if((strings[0] === char && strings[1] === char) || (strings[5] === char  && strings[8] === char) || (strings[4] === char  && strings[6] === char)){
    //         newIndex = places[Math.floor(Math.random() * places.length)]
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //       else {
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //     break;
    //     }
    //     case 3: {
    //       if((strings[0] === char && strings[6] === char) || (strings[4] === char  && strings[5] === char)){
    //         newIndex = places[Math.floor(Math.random() * places.length)]
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //       else {
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //     break;
    //     }
    //     case 5: {
    //       if((strings[2] === char && strings[8] === char) || (strings[4] === char  && strings[3] === char)){
    //         newIndex = places[Math.floor(Math.random() * places.length)]
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //       else {
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //     break;
    //     }
    //     case 6: {
    //       if((strings[0] === char && strings[3] === char) || (strings[7] === char  && strings[8] === char) || (strings[4] === char  && strings[2] === char)){
    //         newIndex = places[Math.floor(Math.random() * places.length)]
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //       else {
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //     break;
    //     }
    //     case 7: {
    //       console.log("hello")
    //       if((strings[6] === char && strings[8] === char) || (strings[4] === char  && strings[1] === char)){
    //         newIndex = places[Math.floor(Math.random() * places.length)]
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //       else {
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //     break;
    //     }
    //     case 8: {
    //       if((strings[6] === char && strings[7] === char) || (strings[2] === char  && strings[5] === char) || (strings[4] === char  && strings[0] === char)){
    //         newIndex = places[Math.floor(Math.random() * places.length)]
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //       else {
    //         strings[newIndex] = char;
    //         setWhichMove('player')
    //         setGameState(strings)
    //         setCounter(counter + 1)
    //         busyPlace(index)
    //         if(char === 'X') {
    //           setIsXChance(false)
    //         }
    //         else if(char === 'O') {
    //           setIsXChance(true)
    //         }
    //       }
    //     break;
    //     }
    //     default: {
    //       console.log("brak ruchu")
    //   }
    
    // }
  
    //   }
}




  let strings = Array.from(gameState);
  const userFirstStart = useCallback (()=>{
    if(counter === 1 && whichMove === 'computer' && call === 0) {
      if(IsXChance) {
        if(strings[4] === '') {
        
          strings[4] = 'X';
          setWhichMove('player')
    setGameState(strings)
    setCounter(counter + 1)
    setIsXChance(false)
    busyPlace(4)
       }
        else{
          let index = Math.floor(Math.random() * placeWithoutCenter.length);
          strings[placeWithoutCenter[[index]]] = 'X';
          
          
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          setIsXChance(false)
          busyPlace(index)
        
        }
      }
      if(!IsXChance) {
        if(strings[4] === '') {
          
          strings[4] = 'O';
          setWhichMove('player')
    setGameState(strings)
    setCounter(counter + 1)
    setIsXChance(true)
    busyPlace(4)
        }
        else{
          let index = Math.floor(Math.random() * placeWithoutCenter.length);
          strings[placeWithoutCenter[[index]]] = 'O';
          setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          setIsXChance(true)
          busyPlace(index)
        }
      }
      
    }
    if(counter === 3 && whichMove === 'computer' && call === 0) {
      
      for(let i = 0; i < strings.length; i++) {
        if(!IsXChance)
       {
         
        if(strings[i] === 'X') {
          if (strings[oppositeMove[i]]) {
           if(strings[0]) {
            strings[1] =  'O';
            setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          setIsXChance(true)
          busyPlace(1)
           }
           else {
            strings[0] =  'O';
            setWhichMove('player')
          setGameState(strings)
          setCounter(counter + 1)
          setIsXChance(true)
          busyPlace(0)
           }
           
        break;
          }
          else {
          strings[oppositeMove[i]] =  'O';
          setWhichMove('player')
        setGameState(strings)
        setCounter(counter + 1)
        setIsXChance(true)
        busyPlace(i)
        break;
      }
         }
      }
     if(IsXChance)
      {
        if(strings[i] === 'O') {
          if (strings[oppositeMove[i]]) {
            if(strings[0]) {
              strings[1] =  'X';
              setWhichMove('player')
            setGameState(strings)
            setCounter(counter + 1)
            setIsXChance(false)
            busyPlace(1)
             }
             else {
              strings[0] =  'X';
              setWhichMove('player')
            setGameState(strings)
            setCounter(counter + 1)
            setIsXChance(false)
            busyPlace(0)
             }
           
        break;
          }
          else {
          strings[oppositeMove[i]] =  'X';
          setWhichMove('player')
        setGameState(strings)
        setCounter(counter + 1)
        setIsXChance(false)
        busyPlace(i)
        break;
           }
      }
     }

    }
  }
  if(counter === 5 && whichMove === 'computer' && call === 0) {
    for(let i = 0; i < strings.length; i++) {
      if(!IsXChance)
     {
      
      if(strings[i] === 'X') {
        if (strings[oppositeMove[i]]){
          strings[bestMoveFive(i,'O')] = 'O'
         }
         else {
         strings[oppositeMove[i]] =  'O';
         setWhichMove('player')
       setGameState(strings)
       setCounter(counter + 1)
       setIsXChance(true)
       busyPlace(i)
       break;
     }
    }}
   if(IsXChance)
    {
      if(strings[i] === 'O') {
        if (strings[oppositeMove[i]]){
          strings[bestMoveFive(i,'X')] = 'X'
          
       break;
         }
         else {
         strings[oppositeMove[i]] =  'X';
         setWhichMove('player')
       setGameState(strings)
       setCounter(counter + 1)
       setIsXChance(true)
       busyPlace(i)
       break;
     }
    }
   }

  }
  
}
// if(counter === 7 && whichMove === 'computer' && call === 0) {
//   for(let i = 0; i < strings.length; i++) {
//     if(!IsXChance)
//    {
//     if(strings[i] === 'X') {
//       if (strings[oppositeMove[i]]) continue;
//       strings[oppositeMove[i]] =  'O';
//       setWhichMove('player')
//     setGameState(strings)
//     setCounter(counter + 1)
//     setIsXChance(true)
//     busyPlace(i)
//     break;
//      }
//   }
//  if(IsXChance)
//   {
//     if(strings[i] === 'O') {
//      if (strings[oppositeMove[i]]) continue;
//      strings[oppositeMove[i]] =  'X';
//      setWhichMove('player')
//    setGameState(strings)
//    setCounter(counter + 1)
//    setIsXChance(false)
//    busyPlace(i)
//    break;
//   }
//  }

// }

// }
  },[IsXChance, call, counter, oppositeMove, placeWithoutCenter, strings, whichMove])
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
    busyPlace(index)

  }}
    const reset = () =>{
    setGameState(initialState);
    setCounter(0);
    setCall(0)
    setDisplayChooseChar(true)
    setDisplayBoard(false)
    setPlaces(initialPlaces)
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
