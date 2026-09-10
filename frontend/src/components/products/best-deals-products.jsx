import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "./product-card";

function BestDeals() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const allProducts = await getProducts();

            setProducts(allProducts);
        }

        loadProducts();
    }, []);

    const haveDiscount = [...products].filter((product) => product.preco_promocional != null);

    const bestSellers = [...products]
        .sort((a, b) => b.quantidade_vendida - a.quantidade_vendida)
        .slice(0, 5);

    const bestDeals = [...haveDiscount]
        .sort((a, b) => ((b.preco - b.preco_promocional) / b.preco) * 100 - ((a.preco - a.preco_promocional) / a.preco) * 100)
        .filter(
            (deal) => !bestSellers.some(
                (seller) => seller.id === deal.id
            )
        )
        .slice(0, 5);

    return (
        <div className="products-grid">
            {bestDeals.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default BestDeals;