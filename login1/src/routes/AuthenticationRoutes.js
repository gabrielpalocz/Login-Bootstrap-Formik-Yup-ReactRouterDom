// login routing
import AuthLogin from '../components/authentication/views/login';

// register routing
import AuthRegister from '../components/authentication/views/register';


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
];

export default AuthenticationRoutes;
