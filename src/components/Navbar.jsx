import {Link} from 'react-scroll'
import './NavBar.css'


function NavBar (){
    return (
        <nav className="navBar">
           
                <img src="/img/letterEBlack.png" alt="letra E" className="logoE" />
                <div className="tabsNav">
                    <Link className="menuItem">Home</Link>
                    <Link className="menuItem">Experience</Link>
                    <Link className="menuItem">Education</Link>
                    <Link className="menuItem">Tecnical Habilites</Link>
                </div>
        </nav>
    )
}

export {NavBar}