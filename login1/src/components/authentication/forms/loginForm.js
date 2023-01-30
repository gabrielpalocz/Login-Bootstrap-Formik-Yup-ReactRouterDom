import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid').required('is required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('is required'),
});

export const LoginValidationSchema = ({ onSubmit }) => {
    let isEmailWrong = false
    let isPassWrong = false

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
                                    className={isEmailWrong ? "form-control shadow-none rounded-4 is-invalid" : "form-control shadow-none rounded-4"}
                                    placeholder="Email"
                                />
                                {
                                    touched.email && errors.email ? (
                                        isEmailWrong = true
                                    ) : isEmailWrong = false
                                }
                                <label htmlFor="email" >
                                    <p className={isEmailWrong ? "text-danger" : "text-body"}>{isEmailWrong ? `Email address ${errors.email}` : "Email address"}</p>
                                </label>
                            </div>
                            <div className="form-floating">
                                <Field
                                    type={"password"}
                                    name="password"
                                    className={isPassWrong ? "form-control shadow-none rounded-4 is-invalid" : "form-control shadow-none rounded-4"}
                                    placeholder="Password"
                                />
                                {
                                    touched.password && errors.password ? (
                                        isPassWrong = true
                                    ) : isPassWrong = false
                                }
                                <label htmlFor="password" ><p className={isPassWrong ? "text-danger" : "text-body"}>{isPassWrong ? `Password ${errors.password}` : "Password"}</p></label>
                            </div>
                            <div className='d-flex justify-content-between p-1'>
                                <div className='d-flex '>
                                    <Field type="checkbox" name='loginCheck' />
                                    <label className="form-check-label ms-2" htmlFor="loginCheck">
                                        Remember me
                                    </label>
                                </div>
                                <span className="nav-link " role="button" onClick={() => window.location.reload()} >Forgot Password?</span>
                            </div>
                            <button className='btn rounded-3 p-2 fw-bold' type="submit" disabled={isSubmitting} style={{ backgroundColor: '#6456ff', color: 'white' }}>{isSubmitting ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;<strong>Signing In</strong></> : <strong>Sign In</strong>}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}