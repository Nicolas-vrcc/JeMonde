import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import EndForm from './EndForm'
import Portrait from './Portrait'
import EndFormAction from './EndFormAction'
import request from 'request'
import "../main.css"

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            nom: '',
            monde: '',
            engagement: '',
            citation: '',
            email: '',
            id: 0
        }
        // Bind the submission to handleChange() 
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1, 2 or 3, then add one on "next" button click
        currentStep = currentStep >= 5 ? 6  : currentStep + 1
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
        if (currentStep !== 1 && currentStep !== 6) {
            return (
                <div className="prevbtn col-6" onClick = { this._prev }><svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.323809 9.34159L7.11259 16.6511C7.54444 17.1163 8.24461 17.1163 8.67624 16.6511C9.10792 16.1863 9.10792 15.4324 8.67624 14.9677L2.66922 8.49988L8.67607 2.03231C9.10774 1.56732 9.10774 0.813539 8.67607 0.34874C8.2444 -0.116247 7.54426 -0.116247 7.11241 0.34874L0.323633 7.65836C0.107797 7.89087 0 8.19528 0 8.49984C0 8.80455 0.108006 9.10919 0.323809 9.34159Z" fill="#313131" fill-opacity="0.3" />
                </svg></div>

            )
        }
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 5) {
            return (
                <div className="nextbtn absolutrigh col-6" onClick={this._next}><svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5 56C43.6878 56 56 43.6878 56 28.5C56 13.3122 43.6878 1 28.5 1C13.3122 1 1 13.3122 1 28.5C1 43.6878 13.3122 56 28.5 56Z" stroke="#E3A649" strokeWidth="2" />
                    <path d="M34.6762 29.3416L27.8874 36.6511C27.4556 37.1163 26.7554 37.1163 26.3238 36.6511C25.8921 36.1863 25.8921 35.4324 26.3238 34.9677L32.3308 28.4999L26.3239 22.0323C25.8923 21.5673 25.8923 20.8135 26.3239 20.3487C26.7556 19.8838 27.4557 19.8838 27.8876 20.3487L34.6764 27.6584C34.8922 27.8909 35 28.1953 35 28.4998C35 28.8046 34.892 29.1092 34.6762 29.3416Z" fill="#E3A649" />
                </svg></div>
            )
        }
        return null;
    }
    get submitButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep === 5) {
            return (
                <div className="nextbtn absolutrigh col-6" onClick={this.handleSubmit}><svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5 56C43.6878 56 56 43.6878 56 28.5C56 13.3122 43.6878 1 28.5 1C13.3122 1 1 13.3122 1 28.5C1 43.6878 13.3122 56 28.5 56Z" stroke="#E3A649" strokeWidth="2" />
                    <path d="M34.6762 29.3416L27.8874 36.6511C27.4556 37.1163 26.7554 37.1163 26.3238 36.6511C25.8921 36.1863 25.8921 35.4324 26.3238 34.9677L32.3308 28.4999L26.3239 22.0323C25.8923 21.5673 25.8923 20.8135 26.3239 20.3487C26.7556 19.8838 27.4557 19.8838 27.8876 20.3487L34.6764 27.6584C34.8922 27.8909 35 28.1953 35 28.4998C35 28.8046 34.892 29.1092 34.6762 29.3416Z" fill="#E3A649" />
                </svg></div>
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
         this._next()
        var options = {
            method: 'POST',
            url: 'http://localhost:1337/portraits',
            withCredentials: false,
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
            },
            form:
            {
                nom: this.state.nom,
                monde: this.state.monde,
                engagement: this.state.engagement,
                citation: this.state.citation,
                cat: '',
                email: this.state.email,
                texte: `Je suis ${this.state.nom}.
                Je vis dans un monde ${this.state.monde}.
                Mon engagement est ${this.state.engagement}.
                Ma citation favorite ${this.state.citation}`
            }
        }

        request(options, (error, response, bodyText) => {
            if (error) throw new Error(error);

            const body = JSON.parse(bodyText)

            this.setState(prevState => ({ ...prevState, id: body.id }))
            return body
        })
    }

    nextStep = () =>{
        this.setState({ currentStep: this.state.currentStep + 1 })
    }

    render(){
        return(
            <div className="appBody">
            <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
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
            <Step5
            email={this.state.email} 
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            />
            <EndForm 
            currentStep={this.state.currentStep}
            />
            <Portrait nom={this.state.nom}
            monde={this.state.monde}
            engagement={this.state.engagement}
            citation={this.state.citation}
            currentStep={this.state.currentStep}
            />
            <div className="btncontainermainpage">
            {this.previousButton}
            {this.nextButton}
            {this.submitButton}
            </div>
            </form>
            <EndFormAction
            nom={this.state.nom}
            monde={this.state.monde}
            engagement={this.state.engagement}
            citation={this.state.citation}
            currentStep={this.state.currentStep}
            id={this.state.id}
            />
            </div>
                <div className="col-1"></div>
                </div>
            </div>
        )
    }
}