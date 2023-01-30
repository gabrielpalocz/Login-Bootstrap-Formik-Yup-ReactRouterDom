// login routing

import AuthLogin from '../components/authentication/loginCopy';
import AuthRegister from '../components/authentication/registerCopy';


// ==============================|| AUTHENTICATION ROUTING ||============================== //

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
