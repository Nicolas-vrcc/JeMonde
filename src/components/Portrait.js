import React from 'react'

export default class Portrait extends React.Component {
    render() {
        let circleClass = ["circle"];
        if (this.props.currentStep === 6) {
            circleClass.push('circleover');
        }
        console.log(Object.values(this.props).join().length)
        if(Object.values(this.props).join().length > 70){
            return (
                <div className="dcontainer">
                    <div className={circleClass.join(' ')}>
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
                        <p>Je suis {this.props.nom}.
                Je vis dans un monde {this.props.monde}.
                Mon engagement est {this.props.engagement}.
                Ma citation favorite {this.props.citation}</p>
                    </div>
                </div>
            );  
        }
        else{
            return (
                <div className="dcontainer">
                    <div className={circleClass.join(' ')}>
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
                        <p>Je suis {this.props.nom}.
                Je vis dans un monde {this.props.monde}.
                Mon engagement est {this.props.engagement}.
                Ma citation favorite {this.props.citation}
                Je suis {this.props.nom}.
                Je vis dans un monde {this.props.monde}.
                Mon engagement est {this.props.engagement}.
                Ma citation favorite {this.props.citation}</p>
                    </div>
                </div>
            );
        }
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