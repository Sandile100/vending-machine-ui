import "./ProductList.css";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
    return (
    <div className="product-list">
        {
            products.map((product, idx) => {
                return (
                <ProductCard
                key={idx}
                product={product}
                style={{ animationDelay: `${idx * 0.1}s` }}
                />
            );
        })}
    </div>
    );
}

export default ProductList;