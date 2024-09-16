import { Footer } from '../Components/Footer/footer.jsx'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from '../Components/Navbar/navbar.jsx'
import Inicio from '../Pages/Inicio/Inicio.jsx'
import Contacto  from '../Pages/Contacto/contacto.jsx'
import Productos from '../Pages/Productos/productos.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/productos" element={<Productos/>}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  )
}


