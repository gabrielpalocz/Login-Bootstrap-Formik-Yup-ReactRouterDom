import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { RegisterValidationSchema } from '../forms/registerForm';
import { BsPencilSquare } from 'react-icons/bs';
import { Card } from '../ui-components/card.js'
import { Modal } from '../ui-components/modal'


// -------------------------------[ REGISTER VIEW ]------------------------------- //

const Register = () => {
    const [credentialsReg, setCredentialsReg] = useState(null);

    useEffect(() => {
        if (credentialsReg) {
            const c = JSON.stringify(credentialsReg, null, 2);
            alert(c);
        }
    });

    return (
        <Card>
            <div className='d-flex justify-content-center pt-3'>
                <BsPencilSquare className='fs-1 me-2' />
                <h2 className="card-title fw-bold">REGISTER</h2>
            </div>
            <h3 className='mt-5 fw-bold' style={{ color: '#6456ff' }}>Hello, please fill in!</h3>
            <h6 className='mt-3 mb-4 text-muted'>Enter your credentials to continue.</h6>
            <RegisterValidationSchema onSubmit={(e) => setCredentialsReg(e)} />
            <hr className=" border border-secondary-subtle opacity-50" />
            <Link to="/authentication/login" style={{ color: 'black', textDecoration: 'none' }}>Already have an account?</Link>
            <Modal>...</Modal>
        </Card>
    )
}

export default Register;