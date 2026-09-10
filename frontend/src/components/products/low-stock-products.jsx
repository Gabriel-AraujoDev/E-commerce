import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "./product-card";

function LowStockProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const allProducts = await getProducts();

            setProducts(allProducts);
        }

        loadProducts();
    }, []);

    const bestSellers = [...products]
        .sort((a, b) => b.quantidade_vendida - a.quantidade_vendida)
        .slice(0, 5);

    const bestSellerIds = new Set(bestSellers.map(product => product.id));

    const bestDeals = [...products]
        .filter(
            product =>
                product.preco_promocional != null &&
                !bestSellerIds.has(product.id)
        )
        .sort(
            (a, b) =>
                ((b.preco - b.preco_promocional) / b.preco) * 100 -
                ((a.preco - a.preco_promocional) / a.preco) * 100
        )
        .slice(0, 5);

    const usedIds = new Set([
        ...bestSellerIds,
        ...bestDeals.map(product => product.id)
    ]);

    const filteredLowStockProducts = [...products]
        .filter(
            product =>
                product.estoque <= 20 &&
                !usedIds.has(product.id)
        )
        .slice(0, 5);

    return (
        <div className="products-grid">
            {filteredLowStockProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default LowStockProducts;