import { useState } from 'react'
import Users3 from './components/Users3';
import Users2 from './components/Users2';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Something</p>
      <Users3/>
      <Users2/>
    </>
  )
}

export default App
