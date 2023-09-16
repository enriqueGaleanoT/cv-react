import './Hero.css'
import {FaGithub, FaLinkedin} from "react-icons/fa"
function Hero (){
    return (
        <section className='hero' id='hero'>
            <div className='hero-littleMe'>
                <h1>Front-End Developer</h1>
                <p>Hi! I'm <span className='hero-name-custom'>Enrique Galeano</span>. A passionate 3D Modeler and Front-end Developer</p>
                <div className='hero-icons'>
                    <a href='https://www.linkedin.com/in/enrique-galeano/'><FaLinkedin className='icons'></FaLinkedin></a>
                    <a href='https://github.com/enriqueGaleanoT'><FaGithub className='icons'></FaGithub></a>
                </div>
            </div>
            <img src="/img/profilePic.JPG" alt="enriqueGaleano"  className='hero-img'/>
        </section>
    )

}

export {Hero}