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
                <section className="sign-up">
                    <form className="shadow-5 align" noValidate acceptCharset="utf-8">
                        <div>
                            <h1>User Details</h1>
                            <div className="tl"><label htmlFor="email">Email</label>
                                <input className={formErrors.email.length > 0 ? "error" : null} type="email" noValidate
                                    name="email" id="email" placeholder="Email" value={email} onChange={onChange} />
                                {formErrors.email.length > 0 && (<small className="error-message">{formErrors.email}</small>)}
                            </div>
                            <div className="tl"><label htmlFor="password">Password</label>
                                <input className={formErrors.password.length > 0 ? "error" : null} type="password" noValidate
                                    name="password" id="password" placeholder="Password" value={password} onChange={onChange} />
                                {formErrors.password.length > 0 && (<small className="error-message">{formErrors.password}</small>)}
                            </div>

                            <div className="tl"><label htmlFor="address">Address</label>
                                <input className={formErrors.address.length > 0 ? "error" : null} type="text" noValidate
                                    name="address" id="address" placeholder="address" value={address} onChange={onChange} />
                                {formErrors.address.length > 0 && (<small className="error-message">{formErrors.address}</small>)}
                            </div>
                            <button className="btn" onClick={this.back}>Back</button>
                            <button className="btn" onClick={this.continue}>Continue</button>
                        </div>
                    </form>
                </section>
            </React.Fragment>

        )
    }
}
