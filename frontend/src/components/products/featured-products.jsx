import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "./product-card";

function FaturedProducts() {
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

    return (
        <div className="products-grid">
            {bestSellers.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default FaturedProducts;