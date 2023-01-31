import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

/**
 * This is the Forgot Password Form Schema 
 */

const forgotPassFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid').required('is required'),
});

export const ForgotPassValidationSchema = ({ onSubmit }) => {
    let isEmailWrong = false

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
                            <button className='btn rounded-3 p-2 fw-bold' type="submit" disabled={isSubmitting} style={{ backgroundColor: '#6456ff', color: 'white' }}>{isSubmitting ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;<strong>Sending Mail</strong></> : <strong>Send Mail</strong>}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}