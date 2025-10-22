import { useState } from 'react'
import Main from './Components/Main/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
    </>
  )
}

export default App
