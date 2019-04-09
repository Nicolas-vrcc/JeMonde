import React from "react"

export default class Step4 extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        if (this.props.currentStep !== 4) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="email">Ma citation favorite</label>
                <input
                    className="form-control"
                    id="citation"
                    name="citation"
                    type="text"
                    placeholder="Une citation qui vous définit"
                    value={this.props.citation} // Prop: The email input data
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
    }
}