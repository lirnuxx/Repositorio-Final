import './navbar.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navicon from '../Navbar/Icon/navicon.jpg'

const Links = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Productos",
    href: "/productos",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];
export default function Navbar (){
    return (
        <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={ Navicon } className="logo"  />
            <button className="nav-toggle" onClick={handleFunction}>
            <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <ul className="links">
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/productos'>Productos</Link>
            </li>
            <li>
              <Link to='/contacto'>Contacto</Link>
            </li>
          </ul>
          <ul className="social-icons">
            <li className="icon-elem">
              <Link to="https://x.com/agoraphobico" className="icon">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>
            <li className="icon-elem">
              <Link to="https://www.instagram.com/dolce_caemi/" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      
)
}

const handleFunction = () => {

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

}

