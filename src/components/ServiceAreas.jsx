import { MapPin, Mail } from 'lucide-react';

const ServiceAreas = () => {
    const areas = [
        { name: 'Sringeri', region: 'Chikkamagaluru District' },
        { name: 'Koppa', region: 'Chikkamagaluru District' },
        { name: 'Jayapura', region: 'Chikkamagaluru District' },
    ];

    return (
        <section id="service-areas" className="section" style={{ background: 'var(--primary-color)' }}>
            <h2 className="section-title">
                Service Areas
            </h2>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'var(--text-dim)' }}>
                We currently provide land monitoring services in the following areas across Karnataka's Malnad region.
            </p>

            <div className="card-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {areas.map((area, index) => (
                    <div
                        className="card"
                        key={index}
                        style={{ textAlign: 'center' }}
                    >
                        <MapPin size={40} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{area.name}</h3>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>{area.region}</p>
                    </div>
                ))}
            </div>

            <div
                className="card"
                style={{
                    maxWidth: '700px',
                    margin: '3rem auto 0',
                    textAlign: 'center',
                    background: 'var(--card-bg)',
                    border: '2px solid var(--accent-color)'
                }}
            >
                <Mail size={40} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Other Areas</h3>
                <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                    Looking for land monitoring services in a different area? We're expanding our coverage across the Malnad region.
                </p>
                <a href="#contact" className="cta-button">
                    Contact Us for More Details
                </a>
            </div>
        </section>
    );
};

export default ServiceAreas;
