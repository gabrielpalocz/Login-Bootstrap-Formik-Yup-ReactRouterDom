import { useRoutes } from 'react-router-dom';

// routes
import AuthenticationRoutes from './AuthenticationRoutes';


// -------------------------------[ ROUTING RENDER ]------------------------------- //

/**
 * This is the routing render 
 */

export default function ThemeRoutes() {
    return useRoutes(AuthenticationRoutes);
}
