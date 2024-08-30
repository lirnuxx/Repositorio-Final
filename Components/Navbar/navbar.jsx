import './navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Navbar (){
    return (
        <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src="img4/EJP.ico" className="logo" alt="logo" />
            <button className="nav-toggle" onClick={handleFunction}>
            <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <ul className="links">
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="1.html">Platos</a>
            </li>
            <li>
              <a href="2.html">Contacto</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li className="icon-elem">
              <a href="https://x.com/agoraphobico" className="icon">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li className="icon-elem">
              <a href="https://www.instagram.com/mat.svn/" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
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

