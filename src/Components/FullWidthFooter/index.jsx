import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './FullWidthFooter.css';

const FullWidthFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="full-width-footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Social Media Links */}
                    <div className="footer-section">
                        <h3>Social Media</h3>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="social-icon" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="social-icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className="social-icon" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className="social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="quick-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/MyAccount">My Account</Link></li>
                            <li><Link to="/MyOrders">My Orders</Link></li>
                            <li><Link to="/Electronics">Electronics</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: info@ecommerce.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <p>Address: 123 Main Street</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} E-Commerce. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default FullWidthFooter;
