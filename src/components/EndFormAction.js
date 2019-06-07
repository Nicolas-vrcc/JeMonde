import React from "react"
import { Link } from 'react-router-dom'

export default class EndFormAction extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        if (this.props.currentStep !== 6) { // Prop: The current step
            return null
        }
        return (
            <div className="endformaction">
                <a className="cta mb-2" href={`https://twitter.com/home?status= Retrouvez ici mon portait JeMonde
                rejoignez le mouvement :
                jemonde.com/portraits/${this.props.id} #jemonde`}>Tweeter votre portrait</a>
                <Link className="cta" to='/gallery'>Consulter les portraits</Link>
            </div>
        )
    }
}