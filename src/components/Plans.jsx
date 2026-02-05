import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Plans = () => {
    return (
        <section id="plans" className="section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Our Plans
            </motion.h2>
            <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>

                {/* Site Visit Plan */}
                <motion.div
                    className="pricing-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3>Site Visit</h3>
                    <div className="price">₹999<span>/mo</span></div>
                    <ul className="features-list">
                        <li><Check className="check-icon" size={18} /> 4 Visits Per Month</li>
                        <li><Check className="check-icon" size={18} /> Plot & Boundary Check</li>
                        <li><Check className="check-icon" size={18} /> Photos and Video Updates</li>
                        <a href="#contact" className="secondary-button" style={{ display: 'block', textAlign: 'center' }}>Choose Site Visit</a>
                    </ul>
                </motion.div>

                {/* Farm Land Plan */}
                <motion.div
                    className="pricing-card featured"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3>Farm Land</h3>
                    <div className="price">₹1,499<span>/mo</span></div>
                    <ul className="features-list">
                        <li><Check className="check-icon" size={18} /> 4 Visits Per Month</li>
                        <li><Check className="check-icon" size={18} /> Crop & Fence Check</li>
                        <li><Check className="check-icon" size={18} /> Encroachment Alert</li>
                        <li><Check className="check-icon" size={18} /> Photos and Video Updates</li>
                        <li><Check className="check-icon" size={18} /> Coverage is up to 1 acres</li>
                    </ul>
                    <a href="#contact" className="cta-button" style={{ display: 'block', textAlign: 'center' }}>Choose Farm Land</a>
                </motion.div>

                {/* Weekly Visit Plan */}
                <motion.div
                    className="pricing-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3>Weekly Prime</h3>
                    <div className="price">₹2,499<span>/mo</span></div>
                    <ul className="features-list">
                        <li><Check className="check-icon" size={18} /> Weekly Visits (4-5/mo)</li>
                        <li><Check className="check-icon" size={18} /> Dedicated Agent</li>
                        <li><Check className="check-icon" size={18} /> Priority Reporting</li>
                        <li><Check className="check-icon" size={18} /> On-Demand Check</li>
                        <li><Check className="check-icon" size={18} /> Coverage is up to 1 acres</li>
                    </ul>
                    <a href="#contact" className="secondary-button" style={{ display: 'block', textAlign: 'center' }}>Choose Weekly</a>
                </motion.div>

            </div>
        </section>
    );
};

export default Plans;
