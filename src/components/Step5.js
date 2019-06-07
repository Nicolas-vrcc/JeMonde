import React from "react"

export default class Step5 extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        if (this.props.currentStep !== 5) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="email">Mon email de contact</label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="maud@jemonde.com"
                    value={this.props.email} // Prop: The email input data
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
    }
}