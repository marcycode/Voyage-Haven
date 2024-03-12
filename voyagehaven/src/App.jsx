import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './HomePage'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <HomePage/>

    </div>
  )
}

export default App
