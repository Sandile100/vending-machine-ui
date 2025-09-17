import "./ProductCard.css"

function ProductCard({ product, style }) {
 return (
        <div
            className="product-card"
            style={style}
        >
            <img src={`data:image/png;base64,${product.imageid.content}`} alt={product.name} className="picture" />
            <div className="info">
                <h2>{product.name}</h2>
            </div>
        </div>
    );
}

export default ProductCard;