import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import Foto from '../img/profile.jpg'
import '../css/nav.scss'

const Header = () => {
    let location = useLocation()
    return (
        <nav id="navFixed">
            <Link smooth to="#about" className="profile">
                <img src={Foto}
                    width="150" height="150" alt="Jaderson Aires Ferreira" />
            </Link>
            <menu className="menu">
                <div className="item">
                    <Link smooth to="#about"
                        className={`${location.hash}` === '#about' ? "active" : `${location.hash}` === '' ? "active" : "" }>About</Link>
                </div>
                <div className="item">
                    <Link smooth to="#experience"
                        className={`${location.hash}` === '#experience' ? "active" : ""}>Experience</Link>
                </div>
                <div className="item">
                    <Link smooth to="#education"
                        className={`${location.hash}` === '#education' ? "active" : ""}>Education</Link>
                </div>
                <div className="item">
                    <Link smooth to="#skills"
                        className={`${location.hash}` === '#skills' ? "active" : ""}>Skills</Link>
                </div>
                <div className="item">
                    <Link smooth to="#interests"
                        className={`${location.hash}` === '#interests' ? "active" : ""}>Interests</Link>
                </div>
                <div className="item">
                    <Link smooth to="#awards"
                        className={`${location.hash}` === '#awards' ? "active" : ""}>Awards</Link>
                </div>
            </menu>
        </nav>
    )
}

export default Header