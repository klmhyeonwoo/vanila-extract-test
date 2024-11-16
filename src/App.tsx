import {CSSProperties, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {dynamicStyle, dynamicVar} from "./test.css.ts";
import {assignInlineVars} from "@vanilla-extract/dynamic";

function App() {
  const [color, setColor] = useState('white');


  return (
    <>
        <button onClick={() => setColor('blue')}> blue </button>
      <div className={dynamicStyle} style={assignInlineVars({
          [dynamicVar]: 'red',
      })}> test </div>
        <div style={{'display': 'flex'}}>test </div>
    </>
  )
}

export default App
