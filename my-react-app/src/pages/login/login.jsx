import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/AuthContext';
import { ROUTES } from '../../routes';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();


    if (!state) {
        return <div>Contexto de autenticación no disponible</div>;
    }

    console.log('Estado de autenticación:', state.isAuthenticated);

    const handleLogin = () => {
        if (email === 'admin@admin.com' && password === 'admin') {
            dispatch({ type: 'LOGIN' });
            localStorage.setItem('isLoggedIn', 'true');
            navigate(ROUTES.HOME.path, { replace: true });
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    };

    return (
        <div>
            {state.isAuthenticated ? (
                <h1>¡Bienvenido de nuevo!</h1>
            ) : (
                <div>
                    <form>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin}>Iniciar sesión</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Login;