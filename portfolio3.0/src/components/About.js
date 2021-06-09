import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class About extends Component {

    render() {
        return (
            <div className="about-section">
                <h1 style= {{fontFamily: 'poppins',fontWeight: 800, fontSize:'60px'}}>Devonte Hillman</h1>
                <p style= {{fontFamily: 'poppins'}}>My desire to program started in my first engineering class in college when we used C to create a self scoring Arduino robot. Since then I have attended a bootcamp to lean Full stack web development. In the future I plan to use my knowledge to work in the industry of machine learning and the internet of things because I have a strong desire to use computer programming to help automate everyday processes.</p>
                <div className="socials">
                    <FontAwesomeIcon className="socialIcon" color="Black" icon={['fab', 'github']} size="3x"/>
                    <FontAwesomeIcon className="socialIcon" color="#eb5740" icon={['fab', 'linkedin']} size="3x"/>
                    <FontAwesomeIcon className="socialIcon" color="Black" icon="envelope" size="3x"/>
                </div>
            </div>
        )
    }
}
