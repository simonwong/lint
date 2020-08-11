import React from 'react'
import data from '../data.json'

import ClassComp from '../components/ClassComp'
import FuncComp from '../components/FuncComp'
import logo from '../assets/logo.svg'
import './App.css'

function App() {
  const a = 1

  const handleClick = () => {
    console.log(a)
  }

  return (
    <div className="App">
      <h1>
        <img className="app-logo" src={logo} alt=""/>
      </h1>
      <button
        type="button"
        onClick={handleClick}
      >
        按钮事件处理
      </button>

      <ClassComp />
      <FuncComp />

      <ul>
        {
          data.map(item => (
            <li key={item.id}>
              { item.text }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
