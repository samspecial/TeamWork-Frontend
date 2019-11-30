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
    // componentDidMount(){
    //     fetch("https://teamwork-a.herokuapp.com/api/v1/auth/create-user")
    // }
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
            <article className="br3 ba b--black-10 pa4 mv4 w-100 w-50-m w-50-l mw6 center shadow-5">
                <form onSubmit={this.onSubmit} className="measure center" action="sign-up_submit" method="post" acceptCharset="utf-8">
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




        )
    }
}

export default SignUp;