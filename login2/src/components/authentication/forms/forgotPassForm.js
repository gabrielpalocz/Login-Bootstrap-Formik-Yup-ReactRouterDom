import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

/**
 * This is the Forgot Password Form Schema 
 */

const forgotPassFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid').required('is required'),
});

/**
 * Forgot Password Form with inputs validator
 * @param {*} onSubmit - Form data 
 * @returns {Object} {email: string}
 */

export const ForgotPassValidationSchema = ({ onSubmit }) => {

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={forgotPassFormSchema}
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
                                    className={`form-control shadow-none rounded-4 ${touched.email && errors.email ? "is-invalid" : ""}`}
                                    placeholder="Email"
                                />
                                <label htmlFor="email" >
                                    <p className={touched.email && errors.email ? "text-danger" : "text-body"}>{`Email address ${touched.email && errors.email ? errors.email : "Email address"}`}</p>
                                </label>
                            </div>
                            <button className='btn rounded-3 p-2 fw-bold' type="submit" disabled={isSubmitting} style={{ backgroundColor: '#6456ff', color: 'white' }}>{isSubmitting ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;<strong>Sending Mail</strong></> : <strong>Send Mail</strong>}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}