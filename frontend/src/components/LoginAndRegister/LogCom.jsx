import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function LogCom() {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="auth-container">
            <div className="auth-items">
                <p className="title">{showRegister ? 'Register' : 'Login'}</p>
                <p className="subtitle">{showRegister ? 'Create your account' : 'Please login using your account details below'}</p>

                {showRegister && (
                    <>
                        <input type="text" placeholder="User Name" />
                        <input type="email" placeholder="Email Address" />
                    </>
                )}
                {!showRegister && <input type="email" placeholder="Email Address" />}
                <input type="password" placeholder="Password" />

                {!showRegister && <Link className="forgot" to="/forgot-password">Forgot your password?</Link>}

                <button>{showRegister ? 'Register' : 'Sign In'}</button>
                <a className="toggle-auth" onClick={() => setShowRegister(!showRegister)}>
                    {showRegister ? "Already have an account? Login" : "Don't have an account? Create one"}
                </a>
            </div>
        </div>
    );
}

export default LogCom;
