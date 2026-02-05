import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Contact Us
            </motion.h2>
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>Have questions about our service? Ready to secure your property? Reach out to us today.</p>

                    {/* <div className="contact-item">
                        <Phone style={{ color: 'var(--accent-color)' }} />
                        <span>+1 (555) 123-4567</span>
                    </div> */}
                    <div className="contact-item">
                        <Mail style={{ color: 'var(--accent-color)' }} />
                        <span>malnadlandguard@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <MapPin style={{ color: 'var(--accent-color)' }} />
                        <span>Sringeri, Chikkamagaluru, Karnataka</span>
                    </div>
                </div>

                <form className="contact-form" target="_blank" action="https://formsubmit.co/malnadlandguard@gmail.com" method="POST" >
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" placeholder="Your Phone Number" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="5" name="message" placeholder="Tell us about your property needs..."></textarea>
                    </div>
                    <button type="submit" className="cta-button" style={{ width: '100%', borderWidth: 0 }}>Send Message</button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
