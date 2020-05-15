import React, { useState, useEffect } from 'react'
import api from '../services/api'


function RedeSocial() {

    const [networks, setNetworks] = useState([])

    useEffect(() => {
        async function loadNetworks() {
            const response = await api.get(`/network`)
            setNetworks(response.data)
        }
        loadNetworks()
    }, [networks])


    return (
        <ul className="display-flex">
            {networks.map(itemNetwork => (
                <li key={itemNetwork.id} className="list-inline-item">
                    <a href={itemNetwork.link} target='_blank' rel="noopener noreferrer">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className={`fa fa-${itemNetwork.icon} fa-stack-1x fa-inverse`}></i>
                        </span>
                    </a>
                </li>
            ))}            
        </ul>
    )
}

export default RedeSocial


