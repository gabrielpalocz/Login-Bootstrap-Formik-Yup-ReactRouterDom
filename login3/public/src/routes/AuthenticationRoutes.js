// login routing
import AuthLogin from '../components/authentication/views/login';

// register routing
import AuthRegister from '../components/authentication/views/register';

//  forgot password routing
import Forgotpass from '../components/authentication/views/forgotPass'

/**
 * This is the authencation routing 
 */

// -------------------------------[ AUTHENTICATION ROUTING ]------------------------------- //

const AuthenticationRoutes = [
    {
        path: "/",
        element: <AuthLogin />,
    },
    {
        path: "/login",
        element: <AuthLogin />,
    },
    {
        path: "/register",
        element: <AuthRegister />
    },
    {
        path: "/forgotpass",
        element: <Forgotpass />
    },
];

export default AuthenticationRoutes;
