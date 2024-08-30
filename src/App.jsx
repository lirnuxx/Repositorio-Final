import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from '../Components/NavBar/navbar.jsx'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <Navbar></Navbar>
  )
}


