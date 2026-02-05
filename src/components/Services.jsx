import { PersonStanding, ClipboardCheck, AlertTriangle } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <PersonStanding size={40} />,
            title: 'Physical Site Inspections',
            desc: 'We physically visit your land or farm to check perimeters, fences, and general conditions, ensuring no unauthorized usage.'
        },
        {
            icon: <ClipboardCheck size={40} />,
            title: 'Visual Property Updates',
            desc: 'Get photos and videos of your Arecanut plantations, open sites, or farm boundaries directly to your phone after every visit.'
        },
        {
            icon: <AlertTriangle size={40} />,
            title: 'Encroachment Detection',
            desc: 'We monitor for illegal fencing shifts, dumping, or unauthorized construction on your vacant rural plots.'
        }
    ];

    return (
        <section id="services" className="section">
            <h2 className="section-title">
                What We Do
            </h2>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                Protecting your agricultural lands, empty sites, and rural assets from neglect and encroachment through regular physical checks.
            </p>

            <div className="card-grid">
                {services.map((service, index) => (
                    <div
                        className="card"
                        key={index}
                    >
                        <div className="icon-box">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
