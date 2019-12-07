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
                <article className="br3 ba b--black-10 pa4 mv4 w-100 w-50-m w-50-l mw6 center shadow-5">
                    <form className="measure center" noValidate acceptCharset="utf-8">

                        <legend className="pv4 mv4 fw7">Create User Account</legend>
                        <div className="tl"><label htmlFor="firstName">First Name</label>
                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100" type="text" noValidate
                                name="firstName" id="firstName" defaultValue={firstName} placeholder="Firstname" onChange={onChange} />{formErrors.firstName.length > 0 && (<small className="errorMessage">{formErrors.firstName}</small>)}
                        </div>

                        <div className="tl"><label htmlFor="lastName">Last Name</label>
                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100" type="text" noValidate
                                name="lastName" id="lastName" defaultValue={lastName} placeholder="Lastname" onChange={onChange} />{formErrors.lastName.length > 0 && (<small className="errorMessage">{formErrors.lastName}</small>)}
                        </div>

                        <div className="tl"><label htmlFor="gender">Gender</label>
                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100 measure" type="text" noValidate
                                name="gender" id="gender" placeholder="Gender" defaultValue={gender} onChange={onChange} />
                            {formErrors.gender.length > 0 && (<small className="errorMessage">{formErrors.gender}</small>)}
                        </div>
                        <button className="" onClick={this.continue}>Continue</button>
                    </form>
                </article>
            </React.Fragment>
        )
    }
}
