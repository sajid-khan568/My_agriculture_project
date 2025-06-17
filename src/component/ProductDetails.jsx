import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <h2 className="text-center mt-5">⏳ Loading...</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>₹{product.price}</h4>
          <p>वजन: {product.weight}</p>
          <p>⭐ {product.rating?.stars} ({product.rating?.reviews} reviews)</p>
          <button className="btn btn-success mt-3">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
