import React, { Component } from 'react'

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
            department: ""
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        // e.preventDefault;

    }

    render() {
        const { firstName, lastName, email, password, address, gender, jobRole, department } = this.state
        return (

            <form onSubmit={this.onSubmit} className="w-100 measure" action="sign-up_submit" method="post" acceptCharset="utf-8">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                    <div className="mt3 dib">
                        <label className="db fw4 lh-copy f6" htmlFor="firstName">Firstname</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                            name="firstName" id="firstName" placeholder="Firstname" value={firstName} onChange={this.onChange} />
                    </div>
                    <div className="mt3 dib">
                        <label className="db fw4 lh-copy f6" htmlFor="firstName">Lastname</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                            name="lastName" id="lastName" placeholder="Lastname" value={lastName} onChange={this.onChange} />
                    </div>
                    <div className="mt3 dib">
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email"
                            name="email" id="email" placeholder="Email" value={email} onChange={this.onChange} />
                    </div>
                    <div className="mt3 dib">
                        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="password"
                            name="password" id="password" placeholder="Password" value={password} onChange={this.onChange} />
                    </div><div className="mt3 dib">
                        <label className="db fw4 lh-copy f6" htmlFor="gender">Gender</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                            name="gender" id="gender" placeholder="Gender" value={gender} onChange={this.onChange} />
                    </div><div className="mt3 dib">
                        <label className="db fw4 lh-copy f6" htmlFor="Address">Address</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                            name="address" id="address" placeholder="address" value={address} onChange={this.onChange} />
                    </div><div className="mt3 dib">
                        <label className="db fw4 lh-copy f6" htmlFor="jobRole">Job Role</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                            name="jobRole" id="jobRole" placeholder="Job Role" value={jobRole} onChange={this.onChange} />
                    </div><div className="mt3 dib">
                        <label className="db fw4 lh-copy f6" htmlFor="department">Department</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                            name="department" id="department" placeholder="department" value={department} onChange={this.onChange} />
                    </div>
                </fieldset>
                <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" /></div>
            </form>





        )
    }
}

export default SignUp;