import React, { Component } from 'react';
import NavBar from '../NavBar';

export default class UserBio extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values: { firstName, lastName, gender, formErrors }, onChange } = this.props
        return (
            <React.Fragment>
                <NavBar />
                <section className="sign-up">
                    <form className="shadow-5 align" noValidate acceptCharset="utf-8">

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
                            <button className="btn" onClick={this.continue}>Continue</button>
                        </div>
                    </form>
                </section>
            </React.Fragment>
        )
    }
}
