import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser'
// import Networks from '../../components/networks'
import { readFrontEnd } from './actions'
import { nameWithHTML } from '../../help/nameHome'
import './styled.scss'

import Skeleton from 'react-loading-skeleton'

class index extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        adress: '',
        description: '',
        image: '',
        loading: false
    }

    componentDidMount = async () => {
        const about = await readFrontEnd()
        this.setState({
            name: nameWithHTML(about.name),
            phone: about.phone,
            email: about.email,
            adress: about.adress,
            description: about.description,
            image: null,
            loading: true
        })
    }

    render() {
        return (
            <>
                {!this.state.loading ?
                    'loading...' :
                    <section id="about">
                        <div className="auto">
                            <h1>{ReactHtmlParser(this.state.name)}</h1>
                            <div className="subheading">
                                {this.state.adress}
                            &#183; {this.state.phone} &#183;
                            <a href="http://localhost:3000/" className="text-small-color">{this.state.email}</a>
                            </div>
                            <div className="about-description">
                                {this.state.description}
                            </div>
                            {/* <Networks /> */}
                        </div>
                    </section>
                }
            </>
        );
    }
}

export default index;