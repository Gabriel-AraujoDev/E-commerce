import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="site-header">
            <aside className="top-strip flex justify-around items-center">
                <div className="shipping-banner flex justify-center items-center">
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
            </aside>

            <div className="main-header flex items-center justify-between">
                <h1 className="logo">
                    <Link to="/">MERCADÃO</Link>
                </h1>

                <form className="search flex items-center" role="search">
                    <label className="accessibility-label" htmlFor="search-input">Buscar produtos no site.</label>
                    
                    <input type="text" className="search-input" placeholder="O que você está procurando?" id="search-input"/>
                    
                    <button className="search-button flex justify-center items-center" aria-label="Buscar produtos" type="submit">
                        <img className="search-icon" src="/assets/icons/header/search-icon.svg" alt=""/>
                    </button>
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
                        <a className="categories-link flex justify-center items-center gap-2" href="#">
                            <img className="categories-icon" src="/assets/icons/header/main-navigation/hamburger.svg" alt=""/>
                            
                            <span className="categories-text $text-dark">Todas as categorias</span>
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