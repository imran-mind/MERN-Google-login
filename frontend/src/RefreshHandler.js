import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const token = JSON.parse(data)?.token;
        if (token) {
            setIsAuthenticated(true);
            if (location.pathname === '/' ||
                location.pathname === '/login'
            ) {
                navigate('/dashboard', { replace: false });
            }
        }
    }, [location, navigate, setIsAuthenticated])

    return (
        null
    )
}

export default RefrshHandler