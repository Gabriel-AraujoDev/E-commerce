import React, { use, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] =  useState(false);
    return (
        <header className="site-header">
            <aside className="top-strip flex justify-between items-center">
                <div className="shipping-banner flex items-center">
                    <img className="shipping-icon" src="/assets/icons/top-strip/shipping-icon.svg" alt=""/>
                    
                    <span className="shipping-text">Frete grátis em compras acima de R$199</span>
                </div>

                <div className="promo-banner">
                    <span className="promo-text">5% OFF na primeira compra | CUPOM: BEMVINDO</span>
                </div>

                <div className="info-strip flex justify-center items-center">
                    <a className="assistance-info flex justify-center items-center" href="#">
                        <img className="assistance-icon" src="/assets/icons/top-strip/assistance-icon.svg" alt=""/>
                        
                        <span className="assistance-text">Atendimento</span>
                    </a>

                    <a className="help-info flex justify-center items-center" href="#">
                        <img className="help-icon" src="/assets/icons/top-strip/help-icon.svg" alt=""/>
                        
                        <span className="help-text">Ajuda</span>
                    </a>
                </div>

                <button className="top-strip-button">
                    <img src="/assets/icons/header/white-chevron-icon.svg" className="top-strip-chevron-icon" alt="" />
                </button>
            </aside>

            <div className="main-header flex items-center justify-between gap-5">
                <div className="header-brand flex items-center justify-center gap-2">
                    <button className="hamburger-button" type="button" onClick={() => setMenuOpen(true)}>
                        <img
                            src="/assets/icons/header/main-navigation/hamburger.svg"
                            className="hamburger-image"
                            alt="Abrir menu"
                        />
                    </button>

                    <nav className={`mobile-menu ${menuOpen ? "open" : ""} flex flex-column gap-5`}>
                        <div className="mobile-menu-header flex items-center justify-between">
                            <h2 className="site-logo-mobile-menu">Mercadão</h2>

                            <button className="close-mobile-menu-buttom" onClick={() => setMenuOpen(false)}>
                                <img className="close-mobile-menu-icon" src="/assets/icons/header/mobile-menu/close-icon.svg" alt="Fechar menu" />
                            </button>
                        </div>

                        <ul className="mobile-menu-list">
                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/offers.svg" alt="" />
                                        <span className="mobile-menu-category-name">Ofertas</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/news.svg" alt="" />
                                        <span className="mobile-menu-category-name">Novidades</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/featured-products.svg" alt="" />
                                        <span className="mobile-menu-category-name">Mais Vendidos</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-divider"></li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/t-shirt.svg" alt="" />
                                        <span className="mobile-menu-category-name">Masculino</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/dress.svg" alt="" />
                                        <span className="mobile-menu-category-name">Feminino</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/accessories.svg" alt="" />
                                        <span className="mobile-menu-category-name">Acessórios</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/home.svg" alt="" />
                                        <span className="mobile-menu-category-name">Casa</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/electronics.svg" alt="" />
                                        <span className="mobile-menu-category-name">Eletrônicos</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/sports.svg" alt="" />
                                        <span className="mobile-menu-category-name">Esportes</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>

                            <li className="mobile-menu-item">
                                <a href="#" className="mobile-menu-category-link flex flex-start justify-between">
                                    <div className="mobile-menu-category-info flex items-center gap-3">
                                        <img className="mobile-menu-category-image" src="/assets/icons/header/mobile-menu/categories/beauty.svg" alt="" />
                                        <span className="mobile-menu-category-name">Beleza</span>
                                    </div>
                                    <img className="mobile-menu-category-arrow-image" src="/assets/icons/header/dark-chevron-icon.svg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}></div>

                    <h1 className="site-logo flex items-center">
                        <Link className="site-logo-link" to="/">
                            MERCADÃO
                        </Link>
                    </h1>
                </div>

                <form className="search flex items-center" role="search">
                    <button className="search-button flex justify-center items-center" aria-label="Buscar produtos" type="submit">
                        <img className="search-icon" src="/assets/icons/header/search-icon.svg" alt=""/>
                    </button>
                    
                    <label className="accessibility-label" htmlFor="search-input">Buscar produtos no site.</label>
                    
                    <input type="text" className="search-input" placeholder="O que você está procurando?" id="search-input"/>
                </form>

                <nav className="user-actions" aria-label="Ações do usuário">
                    <ul className="actions-list flex justify-center items-center">
                       <li>
                            <div className="account flex items-center">
                                <a className="account-info" href="#">
                                    <img className="account-icon user-actions-icon" src="/assets/icons/header/user-actions/account-icon.svg" alt=""/>
                                </a>

                                <div className="account-info flex flex-column justify-center items-start">
                                    <Link className="account-link" to="/login">
                                        <span className="account-text">Entrar</span>
                                    </Link>

                                    <Link className="register-link" to="/register">
                                        <span className="account-subtext">ou cadastrar-se</span>
                                    </Link>
                                </div>
                            </div>
                       </li>
                            <li>
                            <a className="favorites-link flex flex-column items-center justify-center" href="#">
                                <img className="favorites-icon user-actions-icon" src="/assets/icons/header/user-actions/favorites-icon.svg" alt=""/>
                                
                                <span className="favorites-text">Favoritos</span>
                            </a>
                        </li>

                        <li>
                            <a className="cart-link flex flex-column items-center justify-center" href="#">
                                <img className="cart-icon user-actions-icon" src="/assets/icons/header/user-actions/cart-icon.svg" alt=""/>
                                
                                <span className="cart-count">0</span>
                                
                                <span className="cart-text">Carrinho</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <nav className="main-navigation flex justify-between items-center gap-8" aria-label="Navegação principal">
                <ul className="categories-list">
                    <li>
                        <a className="categories-link-header flex justify-center items-center gap-2" href="#">
                            <img className="categories-icon" src="/assets/icons/header/main-navigation/hamburger.svg" alt=""/>
                            
                            <span className="categories-text $text-dark">Todas as categorias</span>

                            <img src="/assets/icons/header/dark-chevron-icon.svg" className="categories-chevron-icon" alt="" />
                        </a>
                    </li>
                </ul>

                <ul className="navigation-list flex justify-center items-center gap-8">
                    <li>
                        <a className="navigation-link" href="#">Ofertas</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Novidades</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Mais Vendidos</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Masculino</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Feminino</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Acessórios</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Casa</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Eletrônicos</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Esportes</a>
                    </li>

                    <li>
                        <a className="navigation-link" href="#">Beleza</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;