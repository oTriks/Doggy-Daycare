import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestButton from './components/Home.jsx'
import FetchDogData from './components/FetchDogData.jsx'

function App() {

  return (
    <>
      <TestButton/>
      <FetchDogData/>

    </>
  )
}

export default App
