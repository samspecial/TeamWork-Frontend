import React, { Component } from 'react'
import NavBar from '../NavBar'
import '../signUp/SignUp.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const emailRegex = RegExp(/\S+@\S+\.\S+/);
const passwordRegex = RegExp(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/)

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    console.log(formErrors)
    console.log(rest)
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    })
    Object.values(rest).forEach(val => {
        val === "" && (valid = false)
    })
    return valid
}
export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            formErrors: {
                email: "",
                password: ""
            }
        };

    }
    onChange = e => {
        e.preventDefault();

        const { name, value } = e.target;
        const { formErrors } = this.state;

        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : "Please enter a valid email address";
                break;
            case 'password':
                formErrors.password = passwordRegex.test(value) ? "" : "contains uppercase, lowercase, alphanumeric, number and 8 characters";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value })
        console.log(name, value)
    }

    onSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            alert(`Welcome back ${this.state.email}.
            Kindly take your time to read up on what you have missed.`)
            this.props.history.push('/post')
        } else {
            alert(`Ooops!!! Login credentials wrong.`)
        }
    }
    render() {
        const { email, password, formErrors } = this.state;


        return (
            <React.Fragment>
                <NavBar />
                <section className="sign-in">
                    <form onSubmit={this.onSubmit} className="shadow-5" noValidate action="sign-in_submit" method="post" acceptCharset="utf-8">
                        <h1>{'Welcome Back'}</h1>
                        <div>
                            <div className="tl">
                                <label htmlFor="email-address">Email</label>
                                <input className={formErrors.email.length > 0 ? "error" : null} type="email"
                                    name="email" id="email" placeholder="Email" value={email} noValidate onChange={this.onChange} />{formErrors.email.length > 0 && (<small className="error-message">{formErrors.email}</small>)}
                            </div>
                            <div className="tl">
                                <label htmlFor="password">password</label>
                                <input className={formErrors.password.length > 0 ? "error" : null} type="text"
                                    name="password" id="password" placeholder="Password" value={password} noValidate onChange={this.onChange} />
                                {formErrors.password.length > 0 && (<small className="error-message">{formErrors.password}</small>)}
                            </div>
                            <small className="db tl">Don't have an account. <Link className="link" to="/signup">Sign Up Now</Link></small><small className="db tl"><Link className="link" to='/password'>Forgot Password</Link></small>
                            <button className="btn" type="submit">Sign In</button>
                        </div>
                    </form>
                </section>
            </React.Fragment>
        )
    }
}
