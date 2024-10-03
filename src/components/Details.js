import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  let { id } = useParams();
  let [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.find((product) => product.id === parseInt(id)));
  }, [id, products]);

  return (
    <div className="product-details-container">
      <div className="card product-details-card shadow-lg">
        <div className="card-body">
          <h1 className="text-center text-warning mb-4">Product Details</h1>
          {product?.image && (
            <div className="text-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '200px', height: '200px', objectFit: 'contain' }}
              />
            </div>
          )}
          <h4 className="text-dark">
            Product Code: <span className="text-danger">{id}</span>
          </h4>
          <p className="lead mt-3 text-danger">
            Product Name: <span className="text-danger">{product?.name}</span>
          </p>
          <p className="lead mt-3 text-danger">
            Product Price: <span className="text-danger">{product?.price}</span>
          </p>
          <p className="lead mt-3 text-danger">
            Product Quantity: <span className="text-danger">{product?.quantity}</span>
          </p>
          <div className="product-rating mt-4">
            <i className="text-warning mx-1 bi bi-star-fill"></i>
            <i className="text-warning mx-1 bi bi-star-fill"></i>
            <i className="text-warning mx-1 bi bi-star-fill"></i>
            <i className="text-warning mx-1 bi bi-star-fill"></i>
            <i className="text-warning mx-1 bi bi-star-fill"></i>
          </div>
          <Link to="/products" className="btn btn-secondary mt-4">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}