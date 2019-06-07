import React from 'react'
import {Link} from 'react-router-dom'

export default class PortraitList extends React.Component {
    constructor() {
        super()
        this.state = {
            portraits: []
        }
    }
    async componentDidMount() {
        const response = await fetch(`http://localhost:1337/portraits?id=${this.props.match.params.id}`)
        const json = await response.json()
        this.setState({ portraits: json })
        console.log(this.state.portraits)
    }
    get displayPortraitList() {
        if (this.state.portraits.length === 0) {
            return (
                <p>Aucun portrait disponible</p>
            )
        } else {
            return this.state.portraits.map((item) => {
                console.log(Object.values(item.nom, item.monde, item.engagement, item.citation).join().length)
                if (Object.values(item.nom, item.monde, item.engagement, item.citation).join().length > 70) {
                    return (
                        <div key={item.id} className="row">
                            <div className="col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3"></div>
                            <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 card">
                                    <div className="circlelist">
                                        <div className="circlefloaterleft" style={divStyle1}></div>
                                        <div className="circlefloaterright" style={divStyle1}></div>
                                        <div className="circlefloaterleft" style={divStyle2}></div>
                                        <div className="circlefloaterright" style={divStyle2}></div>
                                        <div className="circlefloaterleft" style={divStyle3}></div>
                                        <div className="circlefloaterright" style={divStyle3}></div>
                                        <div className="circlefloaterleft" style={divStyle4}></div>
                                        <div className="circlefloaterright" style={divStyle4}></div>
                                        <div className="circlefloaterleft" style={divStyle5}></div>
                                        <div className="circlefloaterright" style={divStyle5}></div>
                                        <div className="circlefloaterleft" style={divStyle6}></div>
                                        <div className="circlefloaterright" style={divStyle6}></div>
                                        <div className="circlefloaterleft" style={divStyle7}></div>
                                        <div className="circlefloaterright" style={divStyle7}></div>
                                        <div className="circlefloaterleft" style={divStyle8}></div>
                                        <div className="circlefloaterright" style={divStyle8}></div>
                                        <div className="circlefloaterleft" style={divStyle9}></div>
                                        <div className="circlefloaterright" style={divStyle9}></div>
                                        <div className="circlefloaterleft" style={divStyle10}></div>
                                        <div className="circlefloaterright" style={divStyle10}></div>
                                        <div className="circlefloaterleft" style={divStyle11}></div>
                                        <div className="circlefloaterright" style={divStyle11}></div>
                                        <div className="circlefloaterleft" style={divStyle12}></div>
                                        <div className="circlefloaterright" style={divStyle12}></div>
                                        <p>Je suis {item.nom}.
                            Je vis dans un monde {item.monde}.
                            Mon engagement est {item.engagement}.
                            Ma citation favorite {item.citation}</p>
                                    </div>
                                <a className="cta" href={`https://twitter.com/home?status= Mon portrait JeMonde : www.jemonde/gallery/${item.id}! Venez le découvrir sur jemonde.com !#jemonde`}>Tweet</a>
                            </div>
                            <div className="col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3"></div>
                        </div>
                    )
                } else {
                    return (
                        <div key={item.id} className="row">
                            <div className="col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3"></div>
                            <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 card">
                                    <div className="circlelist">
                                        <div className="circlefloaterleft" style={divStyle1}></div>
                                        <div className="circlefloaterright" style={divStyle1}></div>
                                        <div className="circlefloaterleft" style={divStyle2}></div>
                                        <div className="circlefloaterright" style={divStyle2}></div>
                                        <div className="circlefloaterleft" style={divStyle3}></div>
                                        <div className="circlefloaterright" style={divStyle3}></div>
                                        <div className="circlefloaterleft" style={divStyle4}></div>
                                        <div className="circlefloaterright" style={divStyle4}></div>
                                        <div className="circlefloaterleft" style={divStyle5}></div>
                                        <div className="circlefloaterright" style={divStyle5}></div>
                                        <div className="circlefloaterleft" style={divStyle6}></div>
                                        <div className="circlefloaterright" style={divStyle6}></div>
                                        <div className="circlefloaterleft" style={divStyle7}></div>
                                        <div className="circlefloaterright" style={divStyle7}></div>
                                        <div className="circlefloaterleft" style={divStyle8}></div>
                                        <div className="circlefloaterright" style={divStyle8}></div>
                                        <div className="circlefloaterleft" style={divStyle9}></div>
                                        <div className="circlefloaterright" style={divStyle9}></div>
                                        <div className="circlefloaterleft" style={divStyle10}></div>
                                        <div className="circlefloaterright" style={divStyle10}></div>
                                        <div className="circlefloaterleft" style={divStyle11}></div>
                                        <div className="circlefloaterright" style={divStyle11}></div>
                                        <div className="circlefloaterleft" style={divStyle12}></div>
                                        <div className="circlefloaterright" style={divStyle12}></div>
                                        <p>Je suis {item.nom}.
                            Je vis dans un monde {item.monde}.
                            Mon engagement est {item.engagement}.
                            Ma citation favorite {item.citation}
                                            Je suis {item.nom}.
                            Je vis dans un monde {item.monde}.
                            Mon engagement est {item.engagement}.
                            Ma citation favorite {item.citation}</p>
                                    </div>
                                <a className="cta m-auto" href={`https://twitter.com/home?status= Mon portrait JeMonde : www.jemonde/gallery/${item.id}! Venez le découvrir sur jemonde.com !#jemonde`}>Tweet</a>

                            </div>
                            <div className="col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3"></div>
                        </div>
                    )
                }
            })
        }
    }


    render() {
        return (
            <div className="portraitbck vh-100">
                <button><Link to="/gallery">Back</Link></button>
                <h2>Portrait {this.props.match.params.id} </h2>
                {this.displayPortraitList}
            </div>
        );
    }
}

const divStyle1 = {
    height: '21px',
    width: '45%'
};
const divStyle2 = {
    height: '21px',
    width: '25%'
};
const divStyle3 = {
    height: '21px',
    width: '15%'
};
const divStyle4 = {
    height: '21px',
    width: '12%'
};
const divStyle5 = {
    height: '21px',
    width: '10%'
};
const divStyle6 = {
    height: '21px',
    width: '8%'
};
const divStyle12 = {
    height: '21px',
    width: '45%'
};
const divStyle11 = {
    height: '21px',
    width: '12%'
};
const divStyle10 = {
    height: '21px',
    width: '15%'
};
const divStyle9 = {
    height: '21px',
    width: '25%'
};
const divStyle8 = {
    height: '21px',
    width: '10%'
};
const divStyle7 = {
    height: '21px',
    width: '8%'
};