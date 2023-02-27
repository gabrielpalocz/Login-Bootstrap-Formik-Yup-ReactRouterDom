import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { CardLayout } from '../layout/cardLayout'
import { ForgotPassValidationSchema } from '../forms/forgotPassForm';
import { BiReset } from 'react-icons/bi';


// -------------------------------[ FORGOT PASSWORD VIEW ]------------------------------- //


/**
 * 
 * @returns Forgot Password view
 */

const ForgotPass = () => {
    const [credentialSent, setCreadentialSent] = useState(null);

    useEffect(() => {
        if (credentialSent) {
            const c = JSON.stringify(credentialSent, null, 2);
            alert(c);
        }
    }, [credentialSent]);

    return (
        <CardLayout>
            <h2 className="card-title fw-bold pt-3">
                <div className='d-flex justify-content-center'>
                    <BiReset className='fs-1 me-1' />
                    Reset Password
                </div>
            </h2>
            <h3 className='mt-5 fw-bold' style={{ color: '#6456ff' }}>Forgot password?</h3>
            <h6 className='mt-3 mb-4 text-muted'>Enter your email address below and we will send you password reset </h6>
            <ForgotPassValidationSchema onSubmit={(e) => setCreadentialSent(e)} />
            <hr className=" border border-secondary-subtle opacity-50" />
            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Already have an account?</Link>
        </CardLayout>

    )
}

export default ForgotPass;