import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaSnapchatGhost, FaInstagram, FaPhoneAlt, FaGlobe, FaRunning } from 'react-icons/fa';
import { MdOutlineSmartphone } from 'react-icons/md';
import handbag1 from '../images/handbag1.png';
import shoes1 from '../images/shoes1.png';
import bottle1 from '../images/bottle1.png';
import supplement1 from '../images/supplement1.png';
import bag2 from '../images/bag2.png';
import shoes2 from '../images/shoes2.png';
import logo from '../images/sbc 1.png';
import vatImg from '../images/vat.png';
import madaImg from '../images/mada.png';
import masterImg from '../images/master.png';
import visaImg from '../images/visa.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main-container">
                <div className="footer-right-space"></div>
                <div className="footer-orange-column">
                    <div className="footer-logo">
                        <FaRunning size={70} color="white" />
                    </div>
                    <p className="footer-description">
                        متجر سبورتفاي متخصص في بيع جميع مستلزمات المكياج والعناية بالبشرة لتحصلي على بشرة أحلامك وتحافظي على نضارتها مع جميع منتجات العناية بالبشرة والتألق مع جميع منتجاتنا للمكياج.
                    </p>
                    <div className="tax-row desktop-only">
                        <img src={vatImg} alt="VAT" className="vat-image" style={{ width: '35px' }} />
                        <span className="tax-number">الرقم الضريبي : 546987552</span>
                    </div>
                    <div className="payment-methods desktop-only">
                        <img src={visaImg} alt="Visa" className="pay-img" />
                        <img src={masterImg} alt="MasterCard" className="pay-img" />
                        <span className="payment-badge paypal">PayPal</span>
                        <img src={madaImg} alt="Mada" className="pay-img" />
                    </div>
                </div>

                <div className="footer-dark-area">
                    <div className="footer-links-grid">
                        {/* Important Links */}
                        <div className="footer-section">
                            <h3>روابط مهمة</h3>
                            <ul className="footer-links">
                                <li><a href="#">سياسة الخصوصية</a></li>
                                <li><a href="#">الشحن والاسترجاع</a></li>
                                <li><a href="#">الشروط والأحكام</a></li>
                                <li><a href="#">الدعم الفني</a></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="footer-section">
                            <h3>تواصل معنا</h3>
                            <div className="contact-info">
                                <a href="tel:009612345678932" className="contact-item">
                                    <MdOutlineSmartphone size={18} />
                                    <span>009612345678932</span>
                                </a>
                                <a href="tel:009612345678932" className="contact-item">
                                    <FaPhoneAlt size={16} />
                                    <span>009612345678932</span>
                                </a>
                                <a href="#" className="contact-item">
                                    <FaGlobe size={16} />
                                    <span>https://salla.sa</span>
                                </a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="footer-section">
                            <h3>النشرة البريدية</h3>
                            <div className="newsletter-box">
                                <div className="newsletter-input-wrapper">
                                    <input type="email" placeholder="أدخل بريدك الإلكتروني" />
                                    <button className="subscribe-btn">اشترك الآن ↖</button>
                                </div>
                            </div>
                            <div className="social-icons">
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaSnapchatGhost /></a>
                                <a href="#"><FaFacebookF /></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-row">
                        <div className="maroofa-logo desktop-only">
                            <div className="mawthooq-icon">
                                <img src={logo} alt="Sportify Logo" style={{ width: '120px' }} />
                            </div>
                            <span>موثق لدى منصة الأعمال</span>
                        </div>

                        {/* Instagram Feed */}
                        <div className="instagram-feed-box">
                            <span className="insta-handle">@sportify</span>
                            <div className="insta-grid">
                                <div className="insta-item"><img src={handbag1} alt="insta" /></div>
                                <div className="insta-item"><img src={shoes1} alt="insta" /></div>
                                <div className="insta-item"><img src={bottle1} alt="insta" /></div>
                                <div className="insta-item"><img src={supplement1} alt="insta" /></div>
                                <div className="insta-item"><img src={bag2} alt="insta" /></div>
                                <div className="insta-item"><img src={shoes2} alt="insta" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile-only Bottom Info */}
            <div className="footer-mobile-bottom mobile-only">
                <div className="maroofa-logo">
                    <div className="mawthooq-icon">
                        <img src={logo} alt="Sportify Logo" style={{ width: '120px' }} />
                    </div>
                    <span>موثق لدى منصة الأعمال</span>
                </div>
                
                <div className="tax-row">
                    <img src={vatImg} alt="VAT" className="vat-image" style={{ width: '35px' }} />
                    <span className="tax-number">الرقم الضريبي : 546987552</span>
                </div>

                <div className="payment-methods">
                    <img src={madaImg} alt="Mada" className="pay-img" />
                    <span className="payment-badge paypal">PayPal</span>
                    <img src={masterImg} alt="MasterCard" className="pay-img" />
                    <img src={visaImg} alt="Visa" className="pay-img" />
                </div>
            </div>
        </footer>
    );
}