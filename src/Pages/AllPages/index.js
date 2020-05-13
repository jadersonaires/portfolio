import React from 'react'

import About from '../About'
import Awards from '../Awards'
import Education from '../Education'
import Experience from '../Experience'
import Interests from '../Interests'
import Skills from '../Skills'

//Css
import '../../css/styles.css'
import { Main } from './styled'

const AllPages = () => {

    return (
        <Main>
            <About />
            <Experience />
            {/* <Education />
            <Skills />
            <Interests />
            <Awards /> */}
        </Main>
    )

}

export default AllPages