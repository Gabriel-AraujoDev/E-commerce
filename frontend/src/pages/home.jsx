import BestDeals from "../components/products/best-deals-products";
import FeaturedProducts from "../components/products/featured-products"
import LowStockProducts from "../components/products/low-stock-products"
import Banner from "../components/banner/banner";

function Home() {
    return (
        <>
            <Banner />

            <main className="main-content">
                <section className="featured-products">
                    <div className="featured-products-header flex justify-between items-center">
                        <h2 id="featured-products-title" className="featured-products-title">
                            Produtos mais vendidos
                        </h2>

                        <a href="#" className="featured-products-link flex self-center justify-center gap-2">
                            <span className="all-featured-products-text">Ver todos</span>

                            <img className="arrow-icon" src="/assets/icons/categories/arrow-right.svg" loading="lazy" alt=""/>
                        </a>
                    </div>

                    <FeaturedProducts/>
                </section>
            </main>

            <section className="newsletter" aria-labelledby="newsletter-title">
                <div className="newsletter-content flex items-center">
                    <div className="newsletter-info flex flex-column items-start">
                        <div className="newsletter-header flex flex-column">
                            <h2 className="newsletter-title" id="newsletter-title">
                                5% OFF
                            </h2>

                            <p className="newsletter-description">
                                na primeira compra
                            </p>
                        </div>

                        <p className="newsletter-description">
                            Use o cupom: <strong>BEMVINDO</strong>
                        </p>
                    </div>

                    <form className="newsletter-form flex flex-column items-start gap-4">
                        <div className="newsletter-input-group flex items-center justify-center">
                            <label className="accessibility-label" htmlFor="newsletter-email">Digite seu e-mail para pedir o desconto.</label>
                        
                            <input type="email" className="newsletter-input" placeholder="Digite seu e-mail" id="newsletter-email"/>

                            <button type="submit" className="newsletter-button">Quero o desconto</button>
                        </div>
                        
                        <div className="newsletter-privacy">
                            <p className="newsletter-privacy">
                                *Válido para produtos vendidos e entregues pelo Mercadão
                            </p>
                        </div>
                    </form>
                </div>
            </section>

            <section className="best-deals" aria-labelledby="best-deals-title">
                <div className="best-deals-header flex justify-between items-center">
                    <h2 className="best-deals-title" id="best-deals-title">
                        Produtos com descontos
                    </h2>

                    <a href="#" className="best-deals-link flex self-center justify-center gap-2">
                        <span className="all-best-deals-text">Ver todos</span>

                        <img className="arrow-icon" src="/assets/icons/categories/arrow-right.svg" loading="lazy" alt=""/>
                    </a>
                </div>

                <BestDeals />
            </section>

            <section className="low-stock-products" aria-labelledby="low-stock-products-title">
                <div className="low-stock-products-header flex justify-between items-center">
                    <h2 className="low-stock-products-title" id="low-stock-products-title">
                        Poucas unidades
                    </h2>

                    <a href="#" className="low-stock-products-link flex self-center justify-center gap-2">
                        <span className="all-low-stock-products-text">Ver todos</span>

                        <img className="arrow-icon" src="/assets/icons/categories/arrow-right.svg" loading="lazy" alt=""/>
                    </a>
                </div>

                <LowStockProducts />
            </section>

            <section className="announcement" aria-labelledby="announcement-title">
                <div className="announcement-content flex flex-column items-center justify-center">
                    <h2 className="announcement-title" id="announcement-title">
                        Aproveite nossas ofertas exclusivas!
                    </h2>

                    <p className="announcement-description">
                        Descubra produtos incríveis com descontos imperdíveis. Não perca a chance de economizar e adquirir itens de qualidade.
                    </p>

                    <a href="#" className="announcement-link flex items-center justify-center">
                        Clique aqui para aproveitar as ofertas
                    </a>
                </div>
            </section>

            <section className="categories" aria-labelledby="categories-title">
                <div className="categories-header flex justify-between items-center">
                    <h2 className="categories-title" id="categories-title">
                        Navegue por categoria
                    </h2>

                    <a href="#" className="categories-link">
                        <span className="all-categories-text">Ver todas</span>

                        <img className="arrow-icon" src="/assets/icons/categories/arrow-right.svg" loading="lazy" alt=""/>
                    </a>
                </div>

                <nav className="categories-nav flex justify-between items-center gap-8" aria-label="Categorias de produtos">
                    <a href="#" className="category-card flex flex-column items-center">
                        <div className="category-icon">
                            <img src="/assets/images/categories/t-shirt.png" loading="lazy" alt=""/>
                        </div>
                        <span className="category-name">Masculino</span>
                    </a>

                    <a href="#" className="category-card flex flex-column items-center">
                        <div className="category-icon">
                            <img src="/assets/images/categories/female.png" loading="lazy" alt=""/>
                        </div>
                        <span className="category-name">Feminino</span>
                    </a>

                    <a href="#" className="category-card flex flex-column items-center">
                        <div className="category-icon">
                            <img src="/assets/images/categories/shoes.png" loading="lazy" alt=""/>
                        </div>
                        <span className="category-name">Calçados</span>
                    </a>

                    <a href="#" className="category-card flex flex-column items-center">
                        <div className="category-icon">
                            <img src="/assets/images/categories/accessories.png" loading="lazy" alt=""/>
                        </div>
                        <span className="category-name">Acessórios</span>
                    </a>

                    <a href="#" className="category-card flex flex-column items-center">
                        <div className="category-icon">
                            <img src="/assets/images/categories/electronics.png" loading="lazy" alt=""/>
                        </div>
                        <span className="category-name">Eletrônicos</span>
                    </a>

                    <a href="#" className="category-card flex flex-column items-center">
                        <div className="category-icon">
                            <img src="/assets/images/categories/home.png" loading="lazy" alt=""/>
                        </div>
                        <span className="category-name">Casa</span>
                    </a>

                    <a href="#" className="category-card flex flex-column items-center">
                        <div className="category-icon">
                            <img src="/assets/images/categories/sports.png" loading="lazy" alt=""/>
                        </div>
                        <span className="category-name">Esportes</span>
                    </a>

                    <a href="#" className="category-card flex flex-column items-center">
                        <div className="category-icon">
                            <img src="/assets/images/categories/beauty.png" loading="lazy" alt=""/>
                        </div>
                        <span className="category-name">Beleza</span>
                    </a>
                </nav>
            </section>

            <section className="trust-section" aria-labelledby="trust-section-title">
                <div className="trust-container flex justify-between">
                    <div className="trust-card flex items-center gap-4">
                        <div className="trust-icon"><img src="/assets/icons/trust-icons/free-shipping.svg" className="trust-icon" alt="" loading="lazy"/></div>
                    
                        <div className="trust-content">
                            <h2 className="trust-title">Frete Grátis</h2>
                            
                            <p className="trust-description">Para compras acima de R$ 199,90</p>
                        </div>
                    </div>

                    <div className="trust-card flex items-center gap-4">
                        <div className="trust-icon"><img src="/assets/icons/trust-icons/installment-plan.svg" className="trust-icon" alt="" loading="lazy"/></div>
                        
                        <div className="trust-content">
                            <h2 className="trust-title">Parcele em até 10x</h2>
                            
                            <p className="trust-description">Sem juros no cartão</p>
                        </div>
                    </div>

                    <div className="trust-card flex items-center gap-4">
                        <div className="trust-icon"><img src="/assets/icons/trust-icons/trade.svg" className="trust-icon" alt="" loading="lazy"/></div>
                        
                        <div className="trust-content">
                            <h2 className="trust-title">Troca fácil</h2>
                            
                            <p className="trust-description">Devolva o produto em até 7 dias</p>
                        </div>
                    </div>

                    <div className="trust-card flex items-center gap-4">
                        <div className="trust-icon"><img src="/assets/icons/trust-icons/safe.svg" className="trust-icon" alt="" loading="lazy"/></div>
                        
                        <div className="trust-content">
                            <h2 className="trust-title">Compra segura</h2>

                            <p className="trust-description">Seus dados protegidos</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;