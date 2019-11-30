import React, { Component } from 'react'
import NavBar from '../NavBar';

function validate(firstName, lastName, email, password, address, gender, jobRole, department) {
    const errors = [];
    if (firstName.length || lastName.length || address.length || gender.length || jobRole.length || department.length < 0) {
        errors.push("Fields can not be empty");
    }
    if (email.length < 5) {
        errors.push("Email should be at least 5 characters long");
    }
    if (email.split('').filter(x => x === "@").length !== 1) {
        errors.push("Email should contain @");
    }
    if (email.indexOf(".") === -1) {
        errors.push("Email should conatin at least one dot");
    }
    if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
    }
    return errors;
}
class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            address: "",
            gender: "",
            jobRole: "",
            department: "",
            errors: []
        }
    }
    // componentDidMount(){
    //     fetch("https://teamwork-a.herokuapp.com/api/v1/auth/create-user")
    // }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const { firstName, lastName, email, password, address, gender, jobRole, department } = this.state;
        const errors = validate(firstName, lastName, email, password, address, gender, jobRole, department);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
    }

    render() {
        const { firstName, lastName, email, password, address, gender, jobRole, department, errors } = this.state
        return (
            <div>
                <NavBar />
                <article className="br3 ba b--black-10 pa4 mv4 w-100 w-50-m w-50-l mw6 center shadow-5">
                    <form onSubmit={this.onSubmit} className="measure center" action="sign-up_submit" method="post" acceptCharset="utf-8">{errors.map(error => (<p key={error}>Error: {error}</p>))}
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>


                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100" type="text"
                                name="firstName" id="firstName" placeholder="Firstname" value={firstName} onChange={this.onChange} />


                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100" type="text"
                                name="lastName" id="lastName" placeholder="Lastname" value={lastName} onChange={this.onChange} />

                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100" type="email"
                                name="email" id="email" placeholder="Email" value={email} onChange={this.onChange} />

                            <input className="mt3 db pa2 input-reset ba bg-transparent hover-bg-gray w-100" type="password"
                                name="password" id="password" placeholder="Password" value={password} onChange={this.onChange} />

                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                name="gender" id="gender" placeholder="Gender" value={gender} onChange={this.onChange} />
                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                name="address" id="address" placeholder="address" value={address} onChange={this.onChange} />

                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                name="jobRole" id="jobRole" placeholder="Job Role" value={jobRole} onChange={this.onChange} />


                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                name="department" id="department" placeholder="department" value={department} onChange={this.onChange} />

                        </fieldset>
                        <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" /></div>
                    </form>
                </article>
            </div>

        )
    }
}

export default SignUp;