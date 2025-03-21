import React, { useState} from 'react';
import './App.css';
import Block from './components/Blocks';
const casesofwin = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
function App() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [currturn, setcurrturn] = useState('X');
  const handleonclick = (index : number)=>{
    if(state[index]!=null)return;
    const newstate = Array.from(state);
    newstate[index] = currturn;
    setstate(newstate);
    setcurrturn(currturn === 'X' ? 'O' : 'X');
    for(let i=0;i<casesofwin.length;i++){
      if(newstate[casesofwin[i][0]]!=null && newstate[casesofwin[i][0]]===newstate[casesofwin[i][1]] && newstate[casesofwin[i][1]]===newstate[casesofwin[i][2]]){
        alert(currturn + ' wins');
        setstate(Array(9).fill(null));
        setcurrturn('X');
        return;
      }
    }
  }
  return (
    <div className='board'>
      <div className='row'>
        <Block onClick={()=>handleonclick(0)} value={state[0]} />
        <Block onClick={()=>handleonclick(1)} value={state[1]} />
        <Block onClick={()=>handleonclick(2)} value={state[2]} />
      </div>
      <div className='row'>
        <Block onClick={()=>handleonclick(3)} value={state[3]} />
        <Block onClick={()=>handleonclick(4)} value={state[4]} />
        <Block onClick={()=>handleonclick(5)} value={state[5]} />
      </div>
      <div className='row'>
        <Block onClick={()=>handleonclick(6)} value={state[6]} />
        <Block onClick={()=>handleonclick(7)} value={state[7]} />
        <Block onClick={()=>handleonclick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
