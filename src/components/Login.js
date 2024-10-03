
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
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <form
                className='container mt-5'
                style={{ backgroundColor: "whitesmoke", height: "400px", textAlign: "center", width: "25%", borderRadius: "10px" }}
                onSubmit={handleSubmit}
            >
                <div style={{ marginBottom: "10px" }}>
                    <label className='fw-bold' style={{ display: "block", marginLeft: "-150px", marginTop: "40px", marginBottom: '10px' }}>Username</label>
                    <input
                        type="text"
                        style={{ width: "70%", borderRadius: "5px", height: '30px', border: "none" }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='fw-bold' style={{ display: "block", marginLeft: "-150px", marginTop: "40px" }}>Password</label>
                    <input
                        type="password"
                        style={{ width: "70%", height: '30px', borderRadius: "5px", border: "none" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>} 
                <Button variant="danger mt-5" type="submit" style={{ width: "70%" }}>
                    Login
                </Button>
            </form>
        </div>
    );
}
