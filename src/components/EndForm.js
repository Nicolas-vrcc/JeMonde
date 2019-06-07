import React from "react"

export default class EndForm extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        if (this.props.currentStep !== 6) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div>
            <h1>Félicitation, vous avez créé votre portrait JEMONDE</h1>
            </div>
        )
    }
}