import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Products({ products, setProducts }) {
  let deleteProduct = (id) => {
    let newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  let renderedProductList =
    products &&
    products.map((product) => (
      <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
        <Card className="h-100">
          {product.image ? (
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              style={{ width: '200px', height: '200px', margin: 'auto' }}
            />
          ) : (
            <p>No Image Available</p>
          )}

          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text style={{ color: 'red' }}>Price: {product.price}</Card.Text>
            <Card.Text style={{ color: 'gray' }}>Quantity: {product.quantity}</Card.Text>
            <div className="d-flex justify-content-between">
              <Link to={`/products/${product.id}`}>
                <Button variant="light" className="mx-1 fw-bold" style={{width:"75px"}}>
                  Show
                </Button>
              </Link>
              <Link to={`/products/${product.id}/edit`}>
                <Button variant="light" className="mx-1 fw-bold"style={{width:"75px"}}>
                  Edit
                </Button>
              </Link>
              <Button
                variant="danger"
                className="mx-1 fw-bold"
                onClick={() => deleteProduct(product.id)}
                style={{width:"75px"}}
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <div className="mt-5">
      <div className="container">
        <h1 className="text-center mb-5" style={{ color: 'red' }}>Available Products</h1>
        <Link to="/products/0/edit">
        <Button className='mb-5 btn-danger'style={{position:"absolute", right:"50px",top:"200px"}}>+</Button>
          
        </Link>
        <Row style={{marginTop:"100px"}}>{renderedProductList}</Row>
      </div>
    </div>
  );
}
