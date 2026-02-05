import { useState, useEffect } from 'react';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'What We Do', href: '/#services' },
        { name: 'Plans', href: '/#plans' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav style={{
            background: 'var(--bg-dark)',
            borderBottom: '1px solid var(--glass-border)'
        }}>
            <div className="logo">
                <Shield size={28} style={{ color: 'var(--accent-color)' }} />
                <span style={{ color: 'var(--text-light)' }}>Malnad</span> <span style={{ color: 'var(--accent-color)' }}>LandGuard</span>
            </div>

            <div className="menu-toggle" onClick={toggleMenu} style={{ color: 'var(--text-light)' }}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <ul
                className={`nav-links ${isOpen ? 'active' : ''}`}
                style={{ background: 'var(--bg-dark)' }}
            >
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ color: 'var(--text-light)' }}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
                <li>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-light)',
                            display: 'flex',
                            alignItems: 'center',
                            padding: 0
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                    </button>
                </li>
                <li>
                    <a href="#contact" className="cta-button" onClick={() => setIsOpen(false)}>
                        Get Notified
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
