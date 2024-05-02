import React, { useContext } from 'react';
import { AuthContext } from '../../components/AuthContext';


const Login = () => {
    const { state, dispatch } = useContext(AuthContext);

    console.log('Estado de autenticación:', state.isAuthenticated);

    const handleLogin = () => {
        dispatch({ type: 'LOGIN' });
    };

    return (
        <div>
            {state.isAuthenticated ? (
                <p>¡Bienvenido de nuevo!</p>
            ) : (
                <button onClick={handleLogin}>Iniciar sesión</button>
            )}
        </div>
    );
}

export default Login
