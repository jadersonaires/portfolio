import React, { Component } from 'react';
import { read } from './actions'
import { FaTrophy } from 'react-icons/fa'
import './styled.scss'
class index extends Component {

    state = {
        awards: []
    }

    componentDidMount = async () => {
        const awards = await read()
        this.setState({ awards })
    }

    eachAwards = () => {
        const list = this.state.awards || []
        return list.map(item => (
            <div className="item" key={item.id}>
                <FaTrophy color="#ffc107" size={20} />
                <div>{ item.certifications }</div>
            </div>
        ))
    }

    render() {
        return (
            <section id="awards">
                <div className="auto">
                    <h2>Awards & Certifications</h2>
                    <article>
                        {this.eachAwards()}
                    </article>
                </div>
            </section>
        );
    }
}

export default index;