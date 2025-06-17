import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://my-dataset-file.onrender.com/products');
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const result = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(result);
  }, [searchTerm, products]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📦 हमारे उत्पाद</h2>
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 उत्पाद खोजें जैसे - यूरिया, बीज, पोटाश..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <img src={product.image} className="card-img-top" alt={product.name} height="200" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">₹{product.price} | {product.weight}</p>
                    <p className="text-muted">⭐ {product.rating?.stars} ({product.rating?.reviews} reviews)</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>❌ कोई उत्पाद नहीं मिला...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
