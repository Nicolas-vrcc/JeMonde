import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div className="appBody">
            <div className="row fh">
                <div className="col-1"></div>
                    <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 align-self-center">
                <h1 className="text-left">Créé ton portrait JEMONDE et participe au mouvement !</h1>
                <p>Créez votre portrait d’âme, partagez et découvrez.</p>
                <p>Chaque personne sur Terre possède une réponse à la question d’une autre qui réside dans ses valeurs, sa culture, son éducation... Partagez vos questionnements, votre vision pour éclairer les autres et créer du lien entre vous.</p>
                <p>Notre conviction est que nous ne sommes pas tous si différents si nous prenons en compte les points de vus de chacun.</p>
                <div className="d-flex flex-column flex-sm-row flex-lg-row" >
                <Link className="cta m-2" to='/form'>Créer mon portrait</Link>
                <Link className="cta m-2" to='/gallery'>Consulter les portraits</Link>
                </div>
                </div>
                    <div className="col-4 align-self-end  d-none d-md-block d-lg-block">
                        <img className="imgphone" src="./img/picphone.jpg" alt="phone"/>
                </div>
                <div className="col-1"></div>
            </div>
            </div>
        );
    }
}