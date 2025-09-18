import "./ProductDetails.css"
import "./Dropdown.css"
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

function ProductDetails() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const stateName = location?.state?.productId;
 const paramName = params?.name;
  const productId = stateName || paramName || "";

    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(false);

  const API_BASE = "http://localhost:8080/products";
    useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/${encodeURIComponent(productId)}`);
        const data = await res.json();
        setProductDetails(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
    }, [productId]);

    if (!productDetails) return <div>No product selected.</div>;
    if (loading) return <div>Loading...</div>;
    if (!productDetails) return <div>Product not found.</div>;

    return (

        <><div className="product-details">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/")}
          aria-label="Go back to list"
        >
          ← Back
        </button>

        <h1>{productDetails.name}</h1>
        <img src={`data:image/png;base64,${productDetails.imageid.content}`} alt={productDetails.name} className="picture" />
        <p>{productDetails.description}</p>
      </div><div className="dropdown-container">
          <Dropdown product={productDetails} />
        </div></>
    );
    
}

export default ProductDetails;
