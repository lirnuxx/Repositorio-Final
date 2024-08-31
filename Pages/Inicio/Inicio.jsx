import './Inicio.css'
import Carousel from '../../Components/Carrousel/carousel'
import { countries } from '../../Components/Carrousel/data'

export default function Inicio (){
    return (
      <>
      <Carousel images={countries} />
      </>
    )
 }
 
 
 