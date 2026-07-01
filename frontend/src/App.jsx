import { useState } from 'react'
import Users from './components/Users';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Something</p>
      <Users/>
    </>
  )
}

export default App
