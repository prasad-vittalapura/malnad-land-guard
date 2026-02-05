const PrivacyPolicy = () => {
    return (
        <div style={{
            minHeight: '100vh',
            padding: '8rem 5% 4rem',
            background: 'var(--bg-dark)',
            color: 'var(--text-light)'
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>Privacy Policy</h1>
                <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
                    Last Updated: February 4, 2026
                </p>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>1. Information We Collect</h2>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '1rem' }}>
                        We collect the following types of information:
                    </p>
                    <ul style={{ color: 'var(--text-dim)', marginLeft: '2rem' }}>
                        <li>Personal information (name, email, phone number)</li>
                        <li>Property details (location, boundaries, access information)</li>
                        <li>Photos and videos taken during site visits</li>
                        <li>Payment and billing information</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>2. How We Use Your Information</h2>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '1rem' }}>
                        Your information is used to:
                    </p>
                    <ul style={{ color: 'var(--text-dim)', marginLeft: '2rem' }}>
                        <li>Provide property monitoring services</li>
                        <li>Send status updates and alerts</li>
                        <li>Process payments and maintain accounts</li>
                        <li>Improve our services and customer experience</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>3. Data Storage and Security</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        We implement industry-standard security measures to protect your data. Photos and reports are stored securely and encrypted. We retain your data for the duration of your subscription plus 90 days.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>4. Information Sharing</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        We do not sell your personal information. We may share data with:
                    </p>
                    <ul style={{ color: 'var(--text-dim)', marginLeft: '2rem' }}>
                        <li>Our field agents (only property location and access details)</li>
                        <li>Payment processors (for billing purposes)</li>
                        <li>Law enforcement (if legally required)</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>5. Your Rights</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        You have the right to access, correct, or delete your personal information. You may request a copy of all data we hold about you. Contact us at [malnadlandguard@gmail.com] to exercise these rights.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>6. Cookies and Tracking</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        We use cookies to improve user experience and analyze website traffic. You can disable cookies in your browser settings, though some features may not function properly.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>7. Changes to This Policy</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        We may update this Privacy Policy from time to time. We will notify you of significant changes via email. Continued use of our services constitutes acceptance of the updated policy.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>8. Contact Us</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        For privacy-related questions or concerns, contact us at:<br />
                        Email: malnadlandguard@gmail.com<br />
                        {/* Phone: +1 (555) 123-4567 */}
                    </p>
                </section>

                <a href="/" style={{
                    display: 'inline-block',
                    marginTop: '2rem',
                    color: 'var(--accent-color)',
                    textDecoration: 'underline'
                }}>
                    ← Back to Home
                </a>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
