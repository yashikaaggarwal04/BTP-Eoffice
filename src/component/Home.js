import React from "react";
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const history = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        history('/login');
    };

    return (
        <div className="homepage" style={{ backgroundColor: '#003366', height: '100vh', color: 'white' }}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0055b7" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: 'white' }}>E-Office</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                    Tender
                                </a>
                                <ul className="dropdown-menu" style={{ backgroundColor: '#0055b7' }}>
                                    <li><Link to="/home/form" className="dropdown-item" style={{ color: 'white' }}>New Tender</Link></li>
                                    <li><Link to="#" className="dropdown-item" style={{ color: 'white' }}>Corrections</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn btn-outline-secondary me-2" style={{ color: 'white', borderColor: 'white' }}>Profile</button>
                        {/* Logout button */}
                        <button className="btn btn-outline-danger" onClick={handleLogout} style={{ color: 'white', borderColor: 'white' }}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Home;
