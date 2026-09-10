function ProductCard ( {product} ) {
    return (
        <article className="product-card" key={product.id}>
            <button className="favorite-button" aria-label="Adicionar aos favoritos">
                <img src="/assets/icons/featured-products/heart.svg" 
                    loading="lazy" 
                    alt=""/>
            </button>

            <img
                src={`/${product.imagem}`}
                alt=""
                className="product-image"
                loading="lazy"
            />

            <div className="product-info">
                <h3 className="product-name">{product.nome}</h3>
                <p className="product-category">{product.categoria}</p>

                {product.preco_promocional ? (
                    <div className="product-price-container">
                        <p className="product-original-price">
                            <s>R$ {product.preco}</s> <></>
                            <b>
                                {Math.round(
                                    ((product.preco - product.preco_promocional)
                                    / product.preco) * 100
                                )}% OFF
                            </b>
                        </p>

                        {product.preco >= 100 ? (
                            <>
                                    <p className="product-price">R$ {product.preco_promocional}</p>

                                    <p className="product-installments">
                                        6x de R$ {(product.preco / 6).toFixed(2)} sem juros
                                    </p>
                            </>
                        ) : (
                            <>
                                <p className="product-price">R$ {product.preco_promocional}</p>
                                <p className="product-installments">
                                    2x de R$ {(product.preco / 2).toFixed(2)} sem juros
                                </p>
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        <p className="product-price">R$ {product.preco}</p>

                        {product.preco >= 100 ? (
                            <p className="product-installments">
                                6x de R$ {(product.preco / 6).toFixed(2)} sem juros
                            </p>
                        ) : (
                            <p className="product-installments">
                                2x de R$ {(product.preco / 2).toFixed(2)} sem juros
                            </p>
                        )}
                    </>
                )}
                
            </div>
        </article>
    )
}

export default ProductCard;