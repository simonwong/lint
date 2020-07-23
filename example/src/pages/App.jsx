import React from 'react'
import ClassComp from '../components/ClassComp'
import FuncComp from '../components/FuncComp'
import logo from '../assets/logo.svg'
import './App.css'

function App() {
  const handleClick = () => {
    console.log(111)
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
    </div>
  )
}

export default App
