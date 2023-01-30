import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { strengthColor, strengthIndicator } from '../utils/passwordStrength';

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

export const RegisterValidationSchema = ({ onSubmit }) => {
    let isFNWrong = false;
    let isLNWrong = false;
    let isEmailWrong = false;
    let isPassWrong = false;
    let isTermCondCheck = false;

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
                                            className={isFNWrong ? "form-control shadow-none rounded-4 is-invalid" : "form-control shadow-none rounded-4"}
                                            placeholder="firstName" />
                                        {
                                            touched.firstName && errors.firstName ? (
                                                isFNWrong = true
                                            ) : isFNWrong = false
                                        }
                                        <label htmlFor="firstName" className={isFNWrong ? "text-danger" : "text-body"}>{isFNWrong ? `${errors.firstName}` : "First Name"}</label>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-floating">
                                        <Field
                                            type="text"
                                            name="lastName"
                                            className={isLNWrong ? "form-control shadow-none rounded-4 is-invalid" : "form-control shadow-none rounded-4"}
                                            placeholder="lastName" />
                                        {
                                            touched.lastName && errors.lastName ? (
                                                isLNWrong = true
                                            ) : isLNWrong = false
                                        }
                                        <label htmlFor="lastName" className={isLNWrong ? "text-danger" : "text-body"}>{isLNWrong ? `${errors.lastName}` : "Last Name"}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating">
                                <Field
                                    type="email"
                                    name="email"
                                    className={isEmailWrong ? "form-control shadow-none rounded-4 is-invalid" : "form-control shadow-none rounded-4"}
                                    placeholder="Email" />
                                {
                                    touched.email && errors.email ? (
                                        isEmailWrong = true
                                    ) : isEmailWrong = false
                                }
                                <label htmlFor="email" className={isEmailWrong ? "text-danger" : "text-body"}>{isEmailWrong ? `Email address ${errors.email}` : "Email address"}</label>
                            </div>
                            <div className="form-floating">
                                <Field
                                    type="password"
                                    name="password"
                                    className={isPassWrong ? "form-control shadow-none rounded-4 is-invalid" : "form-control shadow-none rounded-4"}
                                    placeholder="Password"
                                    onKeyUp={(e) => {
                                        PasswordLevel(e.target.value);
                                    }} />
                                {
                                    touched.password && errors.password ? (
                                        isPassWrong = true
                                    ) : isPassWrong = false
                                }
                                <label htmlFor="password" className={isPassWrong ? "text-danger" : "text-body"}>{isPassWrong ? `Password ${errors.password}` : "Password"}</label>
                            </div>
                            {strength !== 0 && (
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ backgroundColor: level?.color, width: level?.percentage }}>{level?.label}</div>
                                </div>)}
                            <div className='form-check d-flex ps-1'>
                                <Field type="checkbox" id='termCondCheck' name='termCondCheck' onClick={() => touched.termCondCheck = true} />
                                {
                                    touched.termCondCheck && errors.termCondCheck ? (
                                        isTermCondCheck = true
                                    ) : isTermCondCheck = false
                                }
                                <label className="form-check-label ms-2" htmlFor="termCondCheck">
                                    <div className={isTermCondCheck ? "d-flex text-danger" : "d-flex text-body"}>
                                        Agree with &nbsp;
                                    </div>
                                </label>
                                <span className={isTermCondCheck ? "nav-link text-danger" : "nav-link text-body"} role="button" data-bs-toggle="modal" data-bs-target="#registerFormModal" style={{ color: '#6456ff', textDecoration: 'underline' }}>{isTermCondCheck ? "Terms & Condition" : "Terms & Condition."}</span>
                                <label className="form-check-label" htmlFor="termCondCheck">
                                    <div className={isTermCondCheck ? "d-flex text-danger" : "d-flex text-body"}>
                                        <div>&nbsp;&nbsp;{isTermCondCheck ? errors.termCondCheck : null}</div>
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