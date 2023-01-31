import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Card } from '../ui-components/card.js'
import { FPValidationSchema } from '../forms/forgotPassForm';
import { BiReset } from 'react-icons/bi';


// -------------------------------[ FORGOT PASSWORD VIEW ]------------------------------- //

const ForgotPass = () => {
    const [credentialSent, setCreadentialSent] = useState(null);

    useEffect(() => {
        if (credentialSent) {
            const c = JSON.stringify(credentialSent, null, 2);
            alert(c);
        }
    }, [credentialSent]);

    return (
        <Card>
            <div className='d-flex justify-content-center pt-3'>
                <BiReset className='fs-1 me-1' />
                <h2 className="card-title fw-bold">Reset Password</h2>
            </div>
            <h3 className='mt-5 fw-bold' style={{ color: '#6456ff' }}>Forgot password?</h3>
            <h6 className='mt-3 mb-4 text-muted'>Enter your email address below and we will send you password reset </h6>
            <FPValidationSchema onSubmit={(e) => setCreadentialSent(e)} />
            <hr className=" border border-secondary-subtle opacity-50" />
            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Already have an account?</Link>
        </Card>

    )
}

export default ForgotPass;