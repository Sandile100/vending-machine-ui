import "./ProductCard.css"
import { useNavigate } from "react-router-dom";

function ProductCard({ product, style }) {
    const navigate = useNavigate();
 return (
        <div
            className="product-card"
            style={style}
            onClick={() => navigate("/details", { state: {productId: product.id } })}
        >
            <img src={`data:image/png;base64,${product.imageid.content}`} alt={product.name} className="picture" />
            <div className="info">
                <h2>{product.name}</h2>
            </div>
        </div>
    );
}

export default ProductCard;