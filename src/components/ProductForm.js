import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductForm({ products, setProducts }) {
  let navigate = useNavigate();
  let [productForm, setProductForm] = useState({
    name: '',
    price: '',
    quantity: '',
    image: null 
  });

  let { id } = useParams();

  useEffect(() => {
    if (id != 0) {
      const existingProduct = products.find((product) => product.id === parseInt(id));
      if (existingProduct) {
        setProductForm({
          name: existingProduct.name,
          price: existingProduct.price,
          quantity: existingProduct.quantity,
          image: existingProduct.image || null 
        });
      }
    }
  }, [id, products]);

  let getInputValue = (e) => {
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value
    });
  };
  let handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductForm({
        ...productForm,
        image: URL.createObjectURL(file) 
      });
    }
  };

  let productHandler = (e) => {
    e.preventDefault();

    if (id == 0) {
      let productId = products.length + 1;
      let newProduct = { id: productId, ...productForm };
      setProducts([...products, newProduct]);
    } else {
      let productIndex = products.findIndex((product) => product.id === parseInt(id));
      products[productIndex] = { id: parseInt(id), ...productForm };
      setProducts(products);
    }
    navigate('/products');
  };

  return (
    <div className="product-form-container">
      <div className="form-wrapper">
        <h1 className="form-title text-center">{id == 0 ? 'Add New Product' : 'Edit Product'}</h1>
        <Form onSubmit={productHandler} className="styled-form" encType="multipart/form-data">
          <Form.Group className="mb-4" controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              onChange={getInputValue}
              value={productForm.name}
              type="text"
              placeholder="Enter Product Name"
              name="name"
              className="form-input"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formProductPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              onChange={getInputValue}
              value={productForm.price}
              type="number"
              placeholder="Enter Product Price"
              name="price"
              className="form-input"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formProductQuantity">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              onChange={getInputValue}
              value={productForm.quantity}
              type="number"
              placeholder="Enter Product Quantity"
              name="quantity"
              className="form-input"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formProductImage">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              onChange={handleImageUpload}
              type="file"
              name="image"
              className="form-input"
              accept="image/*"
            />
          </Form.Group>
          <Button variant="danger" type="submit" className="submit-btn">
            {id == 0 ? 'Add Product' : 'Edit Product'}
          </Button>
        </Form>
      </div>
    </div>
  );
}
