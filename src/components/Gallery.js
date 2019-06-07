import React from 'react'
import CategoryList from './CategoryList'
import { Link } from 'react-router-dom'

export default class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            portraits: []
        }
    }
    async componentDidMount() {
        const response = await fetch(`http://localhost:1337/portraits`)
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
                if (Object.values(item.nom, item.monde, item.engagement, item.citation).join().length > 70){
                return (
                    <div key={item.id} className="row">
                        <div className="col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3"></div>
                        <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 card">
                        <Link to={`/portrait/${item.id}`}>
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
                            </Link>
                            </div>
                        <div className="col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3"></div>
                    </div>
                )
                }else{
                    return(
                    <div key={item.id} className="row">
                            <div className="col-1 col-sm-1 col-md-3 col-lg-3 col-xl-3"></div>
                            <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 card">
                            <Link to={`/portrait/${item.id}`}>
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
                            </Link>
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
            <div className="portraitbck">
                <Link to="/"><div className="float-left m-2" onClick={this._prev}><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.323809 9.34159L7.11259 16.6511C7.54444 17.1163 8.24461 17.1163 8.67624 16.6511C9.10792 16.1863 9.10792 15.4324 8.67624 14.9677L2.66922 8.49988L8.67607 2.03231C9.10774 1.56732 9.10774 0.813539 8.67607 0.34874C8.2444 -0.116247 7.54426 -0.116247 7.11241 0.34874L0.323633 7.65836C0.107797 7.89087 0 8.19528 0 8.49984C0 8.80455 0.108006 9.10919 0.323809 9.34159Z" fill="#313131" fill-opacity="0.3" />
                </svg></div></Link>
                <h2 className="p-4">Les portraits {this.props.match.params.id} </h2>
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