import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Card } from '../ui-components/card.js'
import { LoginValidationSchema } from '../forms/loginForm';
import { RiLoginCircleLine } from 'react-icons/ri';

/**
 * This is the Login view 
 */

// -------------------------------[ LOGIN VIEW ]------------------------------- //

const Login = () => {
    const [credentials, setCreadentials] = useState(null);

    useEffect(() => {
        if (credentials) {
            const c = JSON.stringify(credentials, null, 2);
            localStorage.setItem('user', c);
            setCreadentials(null);
            alert(c);
        }
    }, [credentials]);

    return (
        <Card>
            <div className='d-flex justify-content-center pt-3'>
                <RiLoginCircleLine className='fs-1 me-1' />
                <h2 className="card-title fw-bold">LOGIN</h2>
            </div>
            <h3 className='mt-5 fw-bold' style={{ color: '#6456ff' }}>Hello, Have a good day!</h3>
            <h6 className='mt-3 mb-4 text-muted'>Enter your credentials to continue.</h6>
            <LoginValidationSchema onSubmit={(e) => setCreadentials(e)} />
            <hr className=" border border-secondary-subtle opacity-50" />
            <Link to="/register" style={{ color: 'black', textDecoration: 'none' }}>Do not have an account?</Link>
        </Card>

    )
}

export default Login;