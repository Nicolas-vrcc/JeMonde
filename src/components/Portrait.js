import React from 'react'

export default class Portrait extends React.Component {
    render() {
        return (
            <div>
                <p>Je suis {this.props.nom}.
                Je vis dans un monde {this.props.monde}.
                Mon engagement est {this.props.engagement}.
                Ma citation favorite {this.props.citation}</p>
            </div>
        );
    }
}