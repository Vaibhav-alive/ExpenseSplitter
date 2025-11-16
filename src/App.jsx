import { useState } from 'react'
import Card from './pages/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
    </>
  )
}

export default App
