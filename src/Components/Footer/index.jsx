import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer w-full">
            <div className="footer-content w-full">
                {/* Social Media Links */}
                <div className="footer-section">
                    <h3>Redes Sociales</h3>
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
                    <h3>Enlaces Rápidos</h3>
                    <ul className="quick-links">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/MyAccount">Mi Cuenta</Link></li>
                        <li><Link to="/MyOrders">Mis Pedidos</Link></li>
                        <li><Link to="/Electronics">Electrónicos</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Email: info@ecommerce.com</p>
                    <p>Teléfono: +1 234 567 890</p>
                    <p>Dirección: Calle Principal #123</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} E-Commerce. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
