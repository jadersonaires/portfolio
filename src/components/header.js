import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Foto from '../img/profile.jpg'
import '../css/nav.scss'

const Header = () => {
    return (

        <nav id="navFixed">
            <Link smooth to="#about" className="profile">
                <img src={Foto}
                    width="150" height="150" alt="Jaderson Aires Ferreira" />
            </Link>
            <menu className="menu">
                <div className="item">
                    <Link smooth to="#about" className="active">About</Link>
                </div>
                <div className="item">
                    <Link smooth to="#experience" className="">Experience</Link>
                </div>
                <div className="item">
                    <Link smooth to="#education" className="">Education</Link>
                </div>
                <div className="item">
                    <Link smooth to="#skills" className="">Skills</Link>
                </div>
                <div className="item">
                    <Link smooth to="#interests" className="">Interests</Link>
                </div>
                <div className="item">
                    <Link smooth to="#awards" className="">Awards</Link>
                </div>
            </menu>
        </nav>
    )
}

export default Header