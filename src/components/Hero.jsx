import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const images = [
        '/assets/images/alert.png',
        '/assets/images/plantation.jpg',
        '/assets/images/open-land.jpg'
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="home" className="hero">
            <div className="hero-slider">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Away From Your Property? <br /> We're Watching Over It</h1>
                    <p className='buttom-line'>We regularly check your land, send real photos, and alert you if anything looks wrong.</p>
                    <div className="hero-buttons">
                        <a href="#plans" className="cta-button">View Plans</a>
                        <a href="#services" className="secondary-button">How It Works</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
