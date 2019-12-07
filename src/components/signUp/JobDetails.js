import React, { Component } from 'react'
import NavBar from '../NavBar';

export default class JobDetails extends Component {
    onSubmitDetails = e => {
        e.preventDefault();
        this.props.onClick();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { jobRole, department, formErrors }, onChange } = this.props;
        return (
            <React.Fragment>
                <NavBar />
                <article className="br3 ba b--black-10 pa4 mv4 w-100 w-30-m w-50-l mw6 center shadow-5">
                    <form onSubmit={this.onSubmitDetails} className="measure center" action="sign-up_submit" method="post" noValidate acceptCharset="utf-8">
                        <legend className="pv4 mv4 fw7">Job Details</legend>
                        <div className="tl"><label htmlFor="jobRole">Job Role</label>
                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100 measure" type="text" noValidate
                                name="jobRole" id="jobRole" placeholder="Job Role" value={jobRole} onChange={onChange} />
                            {formErrors.jobRole.length > 0 && (<small className="errorMessage">{formErrors.jobRole}</small>)}
                        </div>
                        <div className="tl"><label htmlFor="department">Department</label>
                            <input className="mt3 db pa2 input-reset ba bg-transparent w-100 measure" type="text" noValidate
                                name="department" id="department" placeholder="Department" value={department} onChange={onChange} />
                            {formErrors.department.length > 0 && (<small className="errorMessage">{formErrors.department}</small>)}
                        </div>
                        <button className="" onClick={this.back}>Back</button>
                        <button className="" type="submit">Submit</button>
                    </form>
                </article>
            </React.Fragment >
        )
    }
}
