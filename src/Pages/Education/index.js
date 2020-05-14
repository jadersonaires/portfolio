import React, { Component } from 'react'
import { read } from './actions'
import { formateDateMonthYear } from '../../help/formateDate'
import './styled.scss'
class index extends Component {

    state = {
        education: []
    }

    componentDidMount = async () => {
        const education = await read()
        this.setState({ education })
        console.log(this.state)
    }

    eachEducation = () => {
        const list = this.state.education || []
        return list.map(item => (
            <article key={item.id}>
                <div className="description">
                    <h4>{item.institution}</h4>
                    <p>{item.course}</p>
                    <div>{item.description}</div>
                </div>
                <div className="date">
                    {formateDateMonthYear(item.dateStart)} - {formateDateMonthYear(item.dateLast)}
                </div>
            </article>
        ))
    }

    render() {
        return (
            <section id="education">
                <div className="auto">
                    <h2>Education</h2>
                    {this.eachEducation()}
                </div>
            </section>
        );
    }
}

export default index;