import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.navbarLogo}>
                <Link to="/" style={styles.navbarLink}>WolfTracks</Link>
            </div>
            <ul style={styles.navbarLinks}>
                <li>
                    <Link to="/about" style={styles.navbarLink}>About</Link>
                </li>
                <li>
                    <Link to="/tracks" style={styles.navbarLink}>Tracks</Link>
                </li>
                <li>
                    <Link to="/contact" style={styles.navbarLink}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        position: 'fixed', // Makes the navbar fixed relative to the viewport
        top: 0, // Aligns it to the top of the viewport
        left: 0, // Aligns it to the left of the viewport
        width: '99%', // Ensures it spans the full width of the viewport
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
        zIndex: 1000, // Ensures it stays above other elements
    },
    navbarLogo: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navbarLinks: {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    },
    navbarLink: {
        color: '#fff',
        textDecoration: 'none',
    },
};

export default Navbar;