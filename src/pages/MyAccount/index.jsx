import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../Components/Layout";
import './MyAccount.css';

function MyAccount() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { email, password, rememberMe });
    };

    return (
        <Layout>
            <div className="my-account-container">
                <div className="login-box">
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Ingresa tu correo electrónico"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                        </div>
                        <div className="form-options">
                            <label className="remember-me">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                Recordarme
                            </label>
                            <Link to="/forgot-password" className="forgot-password">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <button type="submit" className="login-button">
                            Iniciar Sesión
                        </button>
                    </form>
                    <div className="register-link">
                        ¿No tienes una cuenta?{' '}
                        <Link to="/register">Regístrate aquí</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default MyAccount;