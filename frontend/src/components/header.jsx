import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="site-header">
            <aside className="top-strip">
                <div className="shipping-banner">
                    <img className="shipping-icon" src="/assets/icons/top-strip/shipping-icon.svg" alt=""/>
                    
                    <span className="shipping-text">Frete grátis em compras acima de R$199</span>
                </div>

                <div className="promo-banner">
                    <span className="promo-text">5% OFF na primeira compra | CUPOM: BEMVINDO</span>
                </div>

                <div className="info-strip">
                    <a className="assistance-info" href="#">
                        <img className="assistance-icon" src="/assets/icons/top-strip/assistance-icon.svg" alt=""/>
                        
                        <span className="assistance-text">Atendimento</span>
                    </a>

                    <a className="help-info" href="#">
                        <img className="help-icon" src="/assets/icons/top-strip/help-icon.svg" alt=""/>
                        
                        <span className="help-text">Ajuda</span>
                    </a>
                </div>
            </aside>

            <div className="main-header">
                <h1 className="logo">
                    <Link to="/">MERCADÃO</Link>
                </h1>

                <form className="search" role="search">
                    <label className="accessibility-label" htmlFor="search-input">Buscar produtos no site.</label>
                    
                    <input type="text" className="search-input" placeholder="O que você está procurando?" id="search-input"/>
                    
                    <button className="search-button" aria-label="Buscar produtos" type="submit">
                        <img className="search-icon" src="/assets/icons/header/search-icon.svg" alt=""/>
                    </button>
                </form>

                <nav className="user-actions" aria-label="Ações do usuário">
                    <ul className="actions-list">
                       <li>
                            <div className="account">
                                <a className="account-info" href="#">
                                    <img className="account-icon user-actions-icon" src="/assets/icons/header/user-actions/account-icon.svg" alt=""/>
                                </a>

                                <div className="account-info">
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
                            <a className="favorites-link" href="#">
                                <img className="favorites-icon user-actions-icon" src="/assets/icons/header/user-actions/favorites-icon.svg" alt=""/>
                                
                                <span className="favorites-text">Favoritos</span>
                            </a>
                        </li>

                        <li>
                            <a className="cart-link" href="#">
                                <img className="cart-icon user-actions-icon" src="/assets/icons/header/user-actions/cart-icon.svg" alt=""/>
                                
                                <span className="cart-count">0</span>
                                
                                <span className="cart-text">Carrinho</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <nav className="main-navigation" aria-label="Navegação principal">
                <ul className="categories-list">
                    <li>
                        <a className="categories-link" href="#">
                            <img className="categories-icon" src="/assets/icons/header/main-navigation/hamburger.svg" alt=""/>
                            
                            <span className="categories-text">Todas as categorias</span>
                        </a>
                    </li>
                </ul>

                <ul className="navigation-list">
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