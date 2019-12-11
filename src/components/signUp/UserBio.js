import React, { Component } from 'react';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom'
export default class UserBio extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        if (!this.canContinue()) {
            return
        }
    }
    canContinue = () => {
        const { values: { firstName, lastName, gender } } = this.props;
        return firstName.length > 2 && lastName.length > 2 && gender.length > 2;
    }
    render() {
        const { values: { firstName, lastName, gender, formErrors }, onChange } = this.props;
        const isEnabled = this.canContinue();
        return (
            <React.Fragment>
                <NavBar />
                <section className="sign-up">
                    <form className="shadow-5 align" acceptCharset="utf-8">

                        <h1>Create User Account</h1>
                        <div>
                            <div className="tl"><label htmlFor="firstName">First Name</label>
                                <input className={formErrors.firstName.length > 0 ? "error" : null} type="text" noValidate
                                    name="firstName" id="firstName" value={firstName} placeholder="Firstname" onChange={onChange} />{formErrors.firstName.length > 0 && (<small className="error-message">{formErrors.firstName}</small>)}
                            </div>

                            <div className="tl"><label htmlFor="lastName">Last Name</label>
                                <input className={formErrors.lastName.length > 0 ? "error" : null} type="text" noValidate
                                    name="lastName" id="lastName" value={lastName} placeholder="Lastname" onChange={onChange} />{formErrors.lastName.length > 0 && (<small className="error-message">{formErrors.lastName}</small>)}
                            </div>

                            <div className="tl"><label htmlFor="gender">Gender</label>
                                <input className={formErrors.gender.length > 0 ? "error" : null} type="text" noValidate
                                    name="gender" id="gender" placeholder="Gender" value={gender} onChange={onChange} />
                                {formErrors.gender.length > 0 && (<small className="error-message">{formErrors.gender}</small>)}
                            </div>
                            <small className="tl db">Have an account, <Link className="link" to="/signin">Login</Link> here</small>
                            <button className="btn" disabled={!isEnabled} onClick={this.continue}>Continue</button>
                        </div>
                    </form>
                </section>
            </React.Fragment>
        )
    }
}
