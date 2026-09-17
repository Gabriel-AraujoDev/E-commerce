import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content flex items-center justify-between">
                <div className="footer-column flex flex-column justify-center">
                    <h3 className="footer-logo">MERCADÃO</h3>
                    <p className="footer-description">O seu mercado online.</p>
                    <p className="footer-description">Variedade, qualidade e preços justos para facilitar a sua vida.</p>
                    
                    <ul className="social-media-list flex items-center">
                        <li className="social-media-item">
                            <a href="#" className="social-media-link">
                                <img className="social-media-image" src="/assets/icons/footer/social-media/instagram-167-svgrepo-com.svg" alt="Instagram" loading="lazy"/>
                            </a>
                        </li>

                        <li className="social-media-item">
                            <a href="#" className="social-media-link">
                                <img className="social-media-image" src="/assets/icons/footer/social-media/facebook-svgrepo-com.svg" alt="Facebook" loading="lazy"/>
                            </a>
                        </li>

                        <li className="social-media-item">
                            <a href="#" className="social-media-link">
                                <img className="social-media-image" src="/assets/icons/footer/social-media/youtube-168-svgrepo-com.svg" alt="YouTube" loading="lazy"/>
                            </a>
                        </li>

                        <li className="social-media-item">
                            <a href="#" className="social-media-link">
                                <img className="social-media-image" src="/assets/icons/footer/social-media/tiktok-svgrepo-com.svg" alt="TikTok" loading="lazy"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Institucional</h3>
                    
                    <ul className="footer-list">
                        <li className="footer-description"><a className="footer-link" href="#">Sobre nós</a></li>
                        <li className="footer-description"><a className="footer-link" href="#">Política de Privacidade</a></li>
                        <li className="footer-description"><a className="footer-link" href="#">Trabalhe conosco</a></li>
                        <li className="footer-description"><a className="footer-link" href="#">Termos de uso</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Ajuda</h3>
                    
                    <ul className="footer-list">
                        <li className="footer-description"><a className="footer-link" href="#">Central de ajuda</a></li>
                        <li className="footer-description"><a className="footer-link" href="#">Trocas e devoluções</a></li>
                        <li className="footer-description"><a className="footer-link" href="#">Acompanhar pedido</a></li>
                        <li className="footer-description"><a className="footer-link" href="#">Fale conosco</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Formas de pagamento</h3>

                    <div className="payment-methods">
                        <img className="payment-method-image" src="/assets/icons/footer/payment-methods/visa-svgrepo-com.svg" alt="Visa" loading="lazy"/>
                        <img className="payment-method-image" src="/assets/icons/footer/payment-methods/mastercard-svgrepo-com.svg" alt="Mastercard" loading="lazy"/>
                        <img className="payment-method-image" src="/assets/icons/footer/payment-methods/paypal-svgrepo-com.svg" alt="PayPal" loading="lazy"/>
                        <img className="payment-method-image-pix" src="/assets/icons/footer/payment-methods/pix-payment-logo.svg" alt="Pix" loading="lazy"/>
                        <img className="payment-method-image" src="/assets/icons/footer/payment-methods/elo-svgrepo-com.svg" alt="Elo" loading="lazy"/>
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Newsletter</h3>      
                    <p className="footer-description">Receba ofertas exclusivas em seu e-mail!</p>
                    
                    <form className="newsletter-form">
                        <div className="newsletter-input-group flex justify-center items-center">
                            <label className="accessibility-label" htmlFor="footer-newsletter-email">Digite seu e-mail para receber ofertas.</label>
                        
                            <input type="email" className="newsletter-input" placeholder="Digite seu e-mail" id="footer-newsletter-email"/>

                            <button
                                type="submit"
                                className="newsletter-button-footer flex items-center justify-center"
                                aria-label="Inscrever-se">
                                <img className="newsletter-button-image" src="/assets/icons/footer/arrow-right-white.svg" alt="" aria-hidden="true"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer-bottom flex justify-center items-center gap-4">
                <p>&copy; 2026 Mercadão. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;