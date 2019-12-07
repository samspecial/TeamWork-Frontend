import React, { Component } from 'react'
import NavBar from '../NavBar';

export default class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    render() {

        const { values: { email, password, address, formErrors }, onChange } = this.props;

        return (
            <React.Fragment>
                <NavBar />
                <article className="br3 ba b--black-10 pa4 mv4 w-100 w-50-m w-50-l mw6 center shadow-5">
                    <form className="measure center" noValidate acceptCharset="utf-8">

                        <legend className="pv4 mv4 fw7">User Details</legend>
                        <div className="tl"><label htmlFor="email">Email</label>
                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100" type="email" noValidate
                                name="email" id="email" placeholder="Email" value={email} onChange={onChange} />
                            {formErrors.email.length > 0 && (<small className="errorMessage">{formErrors.email}</small>)}
                        </div>
                        <div className="tl"><label htmlFor="password">Password</label>
                            <input className="mt3 db pa2 input-reset ba bg-transparent hover-bg-transparent w-100" type="password" noValidate
                                name="password" id="password" placeholder="Password" value={password} onChange={onChange} />
                            {formErrors.password.length > 0 && (<small className="errorMessage">{formErrors.password}</small>)}
                        </div>

                        <div className="tl"><label htmlFor="address">Address</label>
                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100 measure" type="text" noValidate
                                name="address" id="address" placeholder="address" value={address} onChange={onChange} />
                            {formErrors.address.length > 0 && (<small className="errorMessage">{formErrors.address}</small>)}
                        </div>
                        <button className="" onClick={this.back}>Back</button>
                        <button className="" onClick={this.continue}>Continue</button>

                    </form>
                </article>
            </React.Fragment>

        )
    }
}
