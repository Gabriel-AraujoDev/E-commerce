import { useEffect, useState } from "react";
import { getProducts } from "./service/api";

export default function App() {
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
        .slice(0, 6);

    console.log(bestSellers);
    return (
      <div></div>
    );
}