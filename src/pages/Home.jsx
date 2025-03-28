import React from 'react';
import NcsuPaw from '../assets/NcsuPaw.png';

const Home = () => {
    return (
        <div className="homepage">
            <header className="header">
                <h1>Welcome to WolfTracks</h1>
            </header>
            <main className="main-content">
                <p>Your one-stop solution for tracking wolves in the wild.</p>
                <button className="cta-button">Get Started</button>
            </main>
            <img src={NcsuPaw} height={900} width={900}></img>
            <footer className="footer">
                <p>&copy; 2023 WolfTracks. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;