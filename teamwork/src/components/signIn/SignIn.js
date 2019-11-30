import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { email, password } = this.state;

        return (
            <div className="sign-in">
                <article className="br2 ba dark-gray b--black-20 dib mv4 w-100 w-50-m w-40-l mw6 center">
                    <form onSubmit={this.onSubmit} className="measure" action="sign-in_submit" method="post" acceptCharset="utf-8">
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
        )
    }
}
