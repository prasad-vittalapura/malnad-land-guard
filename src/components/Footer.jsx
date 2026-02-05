const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-col">
                    <h4>Malnad LandGuard</h4>
                    <p>Peace of mind for property owners.</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Malnad LandGuard. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
