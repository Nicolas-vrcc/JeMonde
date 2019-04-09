import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Portrait from './Portrait'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            nom: '',
            monde: '',
            engagement: '',
            citation: ''
        }
        // Bind the submission to handleChange() 
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1, 2 or 3, then add one on "next" button click
        currentStep = currentStep >= 3 ? 4  : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }
    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
      </button>
            )
        }
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 4) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
      </button>
            )
        }
        return null;
    }
    get submitButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep === 4) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this.handleSubmit}>
                    Valider
      </button>
            )
        }
        return null
    }

    // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`)
    }

    nextStep = () =>{
        this.setState({ currentStep: this.state.currentStep + 1 })
    }

    render(){
        return(
            <div>
            <p>Etape {this.state.currentStep}</p>
            <form onSubmit={this.handleSubmit}>
            <Step1
            nom={this.state.nom} 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            />
            <Step2
            monde={this.state.monde} 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            />
            <Step3
            engagement={this.state.engagement} 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            />
            <Step4
            citation={this.state.citation} 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            />
            {this.previousButton}
            {this.nextButton}
            {this.submitButton}
            </form>
            <Portrait nom={this.state.nom}
            monde={this.state.monde}
            engagement={this.state.engagement}
            citation={this.state.citation}
            /> 
            </div>
        )
    }
}