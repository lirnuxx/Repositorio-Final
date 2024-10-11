import { HPT1 } from '../../Components/HomePageText/hpt'
import { HPT2 } from '../../Components/HomePageText/hpt'
import Carousel from '../../Components/Carrousel/carousel'
import { countries } from '../../Components/Carrousel/data.jsx'

export default function Inicio (){
    return (
      <>
      <Carousel images={countries} />
      <HPT2/>
      </>
    )
 }
 
 
 