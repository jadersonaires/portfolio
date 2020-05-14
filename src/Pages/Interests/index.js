import React, { Component } from 'react';
import { read } from './actions'
import './styled.scss'
class index extends Component {

    state = {
        name: '',
        description: ''
    }

    componentDidMount = async () => {
        const interests = await read()
        this.setState({
            name : interests.name,
            description: interests.description
        })
    }

    render() {
        return (
            <section id="interests" >
                <div className="auto">
                    <h2>{this.state.name}</h2>
                    <div>
                        {this.state.description}
                    </div>
                </div>
            </section>
        );
    }
}

export default index;