import React, { Component } from 'react';
import { read } from './actions'
import { formateDateMonthYear } from '../../help/formateDate'
import './styled.scss'

class index extends Component {

    state = {
        experience: [],
    }

    componentDidMount = async () => {
        const experience = await read()
        this.setState({ experience })
    }

    eachExperience = () => {
        const list = this.state.experience || []
        return list.map(item => (
            <article key={item.id}>
                <div className="description">
                    <h4>{item.campany}</h4>
                    <p>{item.occupation}</p>
                    <div>
                        {item.description}
                    </div>
                </div>
                <div className="date">
                {formateDateMonthYear(item.dateStart)} - {formateDateMonthYear(item.dateLast)}
                </div>
            </article>
        ))
    }

    render() {
        return (
            <section id="experience">
                <div className="auto">
                    <h2>Experience</h2>
                    {this.eachExperience()}
                </div>
            </section>
        );
    }
}

export default index;