import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    localStorage.setItem('Username', username);
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (username.length <= 3) {
            setError('Username must be at least 4 characters long.');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{1,}$/;
        if (!password) {
            setError('Password is required.');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Password must contain at least one uppercase letter and one lowercase letter.');
            return;
        }

        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', padding: '0 15px' }}>
            <form
                className='container mt-5'
                style={{
                    backgroundColor: "whitesmoke",
                    height: "auto",
                    textAlign: "center",
                    maxWidth: "400px",
                    width: "100%",
                    borderRadius: "10px",
                    padding: "20px",
                }}
                onSubmit={handleSubmit}
            >
                <div style={{ marginBottom: "10px" }}>
                    <label className='fw-bold' style={{
                        display: "block",
                        marginBottom: '10px',
                        fontSize: '1rem', // Default font size
                        lineHeight: '1.5',
                        width: '100%', // Ensure label width does not exceed the form
                        textAlign: 'left' // Align text to the left for better readability
                    }}>
                        Username
                    </label>
                    <input
                        type="text"
                        style={{ width: "100%", borderRadius: "5px", height: '35px', border: "none", padding: '0 10px' }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className='fw-bold' style={{
                        display: "block",
                        marginBottom: '10px',
                        fontSize: '1rem', // Default font size
                        lineHeight: '1.5',
                        width: '100%', // Ensure label width does not exceed the form
                        textAlign: 'left' // Align text to the left for better readability
                    }}>
                        Password
                    </label>
                    <input
                        type="password"
                        style={{ width: "100%", height: '35px', borderRadius: "5px", border: "none", padding: '0 10px' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
                <Button variant="danger" type="submit" style={{ width: "100%", marginTop: "20px" }}>
                    Login
                </Button>
            </form>
        </div>
    );
}
