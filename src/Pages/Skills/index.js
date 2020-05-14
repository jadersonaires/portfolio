import React, { Component } from 'react';
import { read } from './actions'
import './styled.scss'

class index extends Component {

    state = {
        skills: []
    }

    componentDidMount = async () => {
        const skills = await read()
        this.setState({ skills })
    }

    eachSkills = () => {
        const list = this.state.skills || []
        return list.map(item => (
            <li key={item.id}>
                <i className={item.icon} ></i> 
            </li>
        ))
    }

    render() {
        return (
            <section id="skills">
                <div className="auto">
                    <h2>Skills</h2>

                    <article>
                        <p>PROGRAMMING LANGUAGES & TOOLS</p>
                        <ul>
                            {this.eachSkills()}
                        </ul>
                    </article>

                </div>
            </section>
        );
    }
}

export default index;