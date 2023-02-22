import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

/**
 * This is the Login Form Schema to control the user inputs
 */

const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid').required('is required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('is required'),
});


/**
 * Login Form with inputs validator
 * @param {*} onSubmit - Form data
 * @returns {Object} {email: string, password: string, loginCheck: Boolean}
 */

export const LoginValidationSchema = ({ onSubmit }) => {

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    loginCheck: false,
                }}
                validationSchema={LoginFormSchema}
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
                            <div className="form-floating">
                                <Field
                                    type="email"
                                    name="email"
                                    className={touched.email && errors.email ? "form-control shadow-none rounded-4 is-invalid" : "form-control shadow-none rounded-4"}
                                    placeholder="Email"
                                />
                                <label htmlFor="email" >
                                    <p className={touched.email && errors.email ? "text-danger" : "text-body"}>{touched.email && errors.email ? `Email address ${errors.email}` : "Email address"}</p>
                                </label>
                            </div>
                            <div className="form-floating">
                                <Field
                                    type={"password"}
                                    name="password"
                                    className={touched.password && errors.password ? "form-control shadow-none rounded-4 is-invalid" : "form-control shadow-none rounded-4"}
                                    placeholder="Password"
                                />
                                <label htmlFor="password" ><p className={touched.password && errors.password ? "text-danger" : "text-body"}>{touched.password && errors.password ? `Password ${errors.password}` : "Password"}</p></label>
                            </div>
                            <div className='d-flex justify-content-between p-1'>
                                <div className='d-flex '>
                                    <Field type="checkbox" name='loginCheck' />
                                    <label className="form-check-label ms-2" htmlFor="loginCheck">
                                        Remember me
                                    </label>
                                </div>
                                <Link to="/forgotpass" style={{ color: 'black', textDecoration: 'none' }}>Forgot Password?</Link>
                            </div>
                            <button className='btn rounded-3 p-2 fw-bold' type="submit" disabled={isSubmitting} style={{ backgroundColor: '#6456ff', color: 'white' }}>{isSubmitting ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;<strong>Signing In</strong></> : <strong>Sign In</strong>}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}