const TermsAndConditions = () => {
    return (
        <div style={{
            minHeight: '100vh',
            padding: '8rem 5% 4rem',
            background: 'var(--bg-dark)',
            color: 'var(--text-light)'
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>Terms and Conditions</h1>
                <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
                    Last Updated: February 4, 2026
                </p>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>1. Acceptance of Terms</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        By accessing and using Malnad LandGuard's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>2. Service Description</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        Malnad LandGuard provides physical property monitoring services including site visits, status updates, and suspicious activity alerts for rural lands, agricultural sites, and vacant properties across India.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>3. User Responsibilities</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        Users must provide accurate property information and maintain valid contact details. You are responsible for ensuring legal ownership or authorization to monitor the property in question.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>4. Service Limitations</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        While we strive to provide comprehensive monitoring, Malnad LandGuard cannot guarantee prevention of all incidents. Our service is limited to scheduled visits and reporting as per the selected plan.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>5. Payment Terms</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        All fees are charged monthly in advance. Cancellations must be made 7 days before the next billing cycle. No refunds will be provided for partial months.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>6. Liability</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        Malnad LandGuard's liability is limited to the monthly subscription fee. We are not responsible for property damage, theft, or loss that occurs between scheduled visits.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>7. Termination</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        Either party may terminate the service with 30 days written notice. Malnad LandGuard reserves the right to terminate service immediately for violation of these terms.
                    </p>
                </section>

                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-light)' }}>8. Contact Information</h2>
                    <p style={{ color: 'var(--text-dim)' }}>
                        For questions about these Terms and Conditions, please contact us at malnadlandguard@gmail.com
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

export default TermsAndConditions;
