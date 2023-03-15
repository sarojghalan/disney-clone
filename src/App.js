import React from 'react'
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Login from '../src/components/Login/Login'


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />}>
        </Route>
      </Routes>
    </>
  )
}

export default App