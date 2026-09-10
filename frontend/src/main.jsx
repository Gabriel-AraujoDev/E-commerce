import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FeaturedProducts from "./components/products/featured-products";
import BestDeals from "./components/products/best-deals-products";
import LowStockProducts from "./components/products/low-stock-products";
import "./css/index.css";

createRoot(document.getElementById("featured-products-root")).render(
    <StrictMode>
        <FeaturedProducts />
    </StrictMode>
);

createRoot(document.getElementById("best-deals-root")).render(
    <StrictMode>
        <BestDeals />
    </StrictMode>
);

createRoot(document.getElementById("low-stock-products-root")).render(
    <StrictMode>
        <LowStockProducts />
    </StrictMode>
);

