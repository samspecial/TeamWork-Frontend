import React, { Component } from 'react'
import NavBar from '../NavBar'
function validate(email, password) {
    const errors = [];
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
export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: []
        };

    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const errors = validate(email, password);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
    }
    render() {
        const { email, password, errors } = this.state;

        return (
            <div>
                <NavBar />
                <div className="sign-in">
                    <article className="br2 ba dark-gray b--black-20 dib mv4 w-100 w-50-m w-40-l mw6 center">
                        <form onSubmit={this.onSubmit} className="measure" action="sign-in_submit" method="post" acceptCharset="utf-8">{errors.map(error => (<p key={error}>Error:{error}</p>))}
                            <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                                <legend className="ph0 mh0 fw6 clip">Sign In</legend>
                                <div className="mt3 db">
                                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email"
                                        name="email" id="email" placeholder="Email" value={email} onChange={this.onChange} />
                                </div>
                                <div className="mt3 db">
                                    <label className="db fw4 lh-copy f6" htmlFor="password">password</label>
                                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                        name="password" id="password" placeholder="password" value={password} onChange={this.onChange} />
                                </div>
                            </fieldset>
                            <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign In" /></div>
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}
