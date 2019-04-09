import React from "react"

export default class Step2 extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="monde">Je vis dans un monde</label>
                <input
                    className="form-control"
                    id="monde"
                    name="monde"
                    type="text"
                    placeholder="un adjectif"
                    value={this.props.monde} // Prop: The email input data
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
    }
}
