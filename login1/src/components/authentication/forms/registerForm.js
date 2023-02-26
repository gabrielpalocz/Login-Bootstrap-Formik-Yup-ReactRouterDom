import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { strengthColor, strengthIndicator } from '../utils/passwordStrength';

/**
 * This is the Registration Form Schema 
 */

const RegisterFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid')
        .required('is required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('is required'),
    termCondCheck: Yup.boolean().oneOf([true], 'is required.'),
});

/**
 * Registration Form with inputs validator
 * @param {*} onSubmit - Form data 
 * @returns {Object} {firstName: string, lastName: string, email: string, password: string, termCondCheck: Boolean}
 */

export const RegisterValidationSchema = ({ onSubmit }) => {
    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();

    const PasswordLevel = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    termCondCheck: false,
                }}
                validationSchema={RegisterFormSchema}
                onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    onSubmit(values);
                    console.log(values);
                    actions.resetForm({});
                    setStrength(0);
                    actions.setSubmitting(false);
                }}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="d-grid gap-3 p-2">
                            <div className="row g-3">
                                <div className="col-sm">
                                    <div className="form-floating">
                                        <Field
                                            type="text"
                                            name="firstName"
                                            className={`form-control shadow-none rounded-4 ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                                            placeholder="firstName" />
                                        <label htmlFor="firstName" className={touched.firstName && errors.firstName ? "text-danger" : "text-body"}>{touched.firstName && errors.firstName ? `${errors.firstName}` : "First Name"}</label>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-floating">
                                        <Field
                                            type="text"
                                            name="lastName"
                                            className={`form-control shadow-none rounded-4 ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                                            placeholder="lastName" />
                                        <label htmlFor="lastName" className={touched.lastName && errors.lastName ? "text-danger" : "text-body"}>{touched.lastName && errors.lastName ? `${errors.lastName}` : "Last Name"}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating">
                                <Field
                                    type="email"
                                    name="email"
                                    className={`form-control shadow-none rounded-4 ${touched.email && errors.email ? "is-invalid" : ""}`}
                                    placeholder="Email" />
                                <label htmlFor="email" className={touched.email && errors.email ? "text-danger" : "text-body"}>{`Email address ${touched.email && errors.email ? errors.email : ""}`}</label>
                            </div>
                            <div className="form-floating">
                                <Field
                                    type="password"
                                    name="password"
                                    className={`form-control shadow-none rounded-4 ${touched.password && errors.password ? "is-invalid" : ""}`}
                                    placeholder="Password"
                                    onKeyUp={(e) => {
                                        PasswordLevel(e.target.value);
                                    }} />
                                <label htmlFor="password" className={touched.password && errors.password ? "text-danger" : "text-body"}>{`Password ${touched.password && errors.password ? errors.password : ""}`}</label>
                            </div>
                            {strength !== 0 && (
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ backgroundColor: level?.color, width: level?.percentage }}>{level?.label}</div>
                                </div>)}
                            <div className='form-check d-flex ps-1'>
                                <Field type="checkbox" id='termCondCheck' name='termCondCheck' onClick={() => touched.termCondCheck = true} />
                                <label className="form-check-label ms-2" htmlFor="termCondCheck">
                                    <div className={`d-flex ${touched.termCondCheck && errors.termCondCheck ? "text-danger" : "text-body"}`}>
                                        Agree with &nbsp;
                                    </div>
                                </label>
                                <span className={`nav-link ${touched.termCondCheck && errors.termCondCheck ? " text-danger" : "text-body"}`} role="button" data-bs-toggle="modal" data-bs-target="#registerFormModal" style={{ color: '#6456ff', textDecoration: 'underline' }}>Terms & Condition{touched.termCondCheck && errors.termCondCheck ? "" : "."}</span>
                                <label className="form-check-label" htmlFor="termCondCheck">
                                    <div className={`d-flex ${touched.termCondCheck && errors.termCondCheck ? " text-danger" : "text-body"}`}>
                                        <div>&nbsp;&nbsp;{touched.termCondCheck && errors.termCondCheck ? errors.termCondCheck : null}</div>
                                    </div>
                                </label>
                            </div>
                            <button className='btn rounded-3 p-2 fw-bold' type="submit" disabled={isSubmitting} style={{ backgroundColor: '#6456ff', color: 'white' }}>{isSubmitting ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;<strong>Signing Up</strong></> : <strong>Sign Up</strong>}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}