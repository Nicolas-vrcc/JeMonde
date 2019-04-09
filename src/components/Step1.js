import React from "react"

export default class Step1 extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="nom">Je suis</label>
                <input
                    className="form-control"
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="prénom"
                    value={this.props.nom} // Prop: The email input data
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
    }
}