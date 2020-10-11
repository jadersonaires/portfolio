import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser'
// import Networks from '../../components/networks'

import ReactPlaceholder from 'react-placeholder';


import { readFrontEnd } from './actions'
import { nameWithHTML } from '../../help/nameHome'
import './styled.scss'

class index extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        address: '',
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
            address: about.adress,
            description: about.description,
            image: null,
            loading: true
        })
    }

    render() {
        return (
            <>
                <section id="about">
                    <div className="auto" style={{ width: '100%' }}>

                        <h1>
                            <ReactPlaceholder type='textRow' delay={2000} showLoadingAnimation={true} ready={this.state.loading} color='#E0E0E0'>
                                {ReactHtmlParser(this.state.name)}
                            </ReactPlaceholder>
                        </h1>


                        <div className="subheading">
                            <ReactPlaceholder type='textRow' delay={2000} showLoadingAnimation={true} ready={this.state.loading} color='#E0E0E0'>
                                {this.state.address}
                                        &#183; {this.state.phone} &#183;
                                        <a href="/" className="text-small-color">
                                    {this.state.email}
                                </a>
                            </ReactPlaceholder>
                        </div>

                        <div className="about-description">
                            <ReactPlaceholder type='text' delay={2000} showLoadingAnimation={true} ready={this.state.loading} rows={2} color='#E0E0E0'>
                                {this.state.description}
                            </ReactPlaceholder>
                        </div>
                        {/* <Networks /> */}
                        
                    </div>
                </section>
            </>
        );
    }
}

export default index;