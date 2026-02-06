import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Valentine from './components/valentine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Valentine/>
    </>
  )
}

export default App
