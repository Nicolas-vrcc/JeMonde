import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>JeMonde</h1>
                <button><Link to='/form'>Questionnaire</Link></button>
                <button><Link to='/gallery'>Gallerie JeMonde</Link></button>
            </div>
        );
    }
}