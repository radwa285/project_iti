import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';

function ContainerExample() {
  const productData = [
    {
      title: 'COASIS Womens Chunky',
      text: 'Latex padded insole for added comfort',
      image: 'https://m.media-amazon.com/images/I/61Pf0pZjl2L._AC_SY675_.jpg',
    },
    {
      title: 'DREAM PAIRS',
      text: 'Ankle strap with adjustable buckle closure',
      image: 'https://m.media-amazon.com/images/I/718sKoZbhqL._AC_SY675_.jpg',
    },
    {
      title: 'Madden Girl',
      text: 'Soft synthetic lining and lightly padded',
      image: 'https://m.media-amazon.com/images/I/71t4vsHpSOL._AC_SY675_.jpg',
    },
  ];

  const productsData = [
    {
      title: 'The Drop Women',
      text: 'Rectangular heel with a two strap detail',
      image: 'https://m.media-amazon.com/images/I/61mFfFa0XJL._AC_SY675_.jpg',
    },
    {
      title: 'Modatope Womens Sandals',
      text: 'High Heel Strappy Sandals',
      image: 'https://m.media-amazon.com/images/I/61H3vJydzbL._AC_SY675_.jpg',
    },
    {
      title: 'Ankis High Heels for Women',
      text: 'Comfortable Insole Provides Support',
      image: 'https://m.media-amazon.com/images/I/71i0ICVJ7nL._AC_SY675_.jpg',
    },
  ];

  return (
    <Container>
      <Row>
        {productData.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
            <ProductCard 
              title={product.title} 
              text={product.text} 
              image={product.image} 
            />
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: "20px" }}>
        {productsData.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
            <ProductCard 
              title={product.title} 
              text={product.text} 
              image={product.image} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ContainerExample;
