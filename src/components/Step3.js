import React from "react"

export default class Step3 extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        if (this.props.currentStep !== 3) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="engagement">Mon engagement est</label>
                <input
                    className="form-control"
                    id="engagement"
                    name="engagement"
                    type="text"
                    placeholder="votre objectif de vie"
                    value={this.props.engagement} // Prop: The email input data
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
    }
}