import { useRoutes } from 'react-router-dom';

// routes
import AuthenticationRoutes from './AuthenticationRoutes';

/**
 * This is the routing render 
 */

// -------------------------------[ ROUTING RENDER ]------------------------------- //


export default function ThemeRoutes() {
    return useRoutes(AuthenticationRoutes);
}
