import Card from 'react-bootstrap/Card';

function ProductCard({ title, text, image }) {
  return (
    <Card style={{ width: '22rem', margin: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
      <Card.Img
        variant="top"
        src={image ? image : 'https://via.placeholder.com/150'} 
        alt={title}
        style={{ height: '400px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
      />
      <Card.Body>
        <Card.Title style={{ color: 'red', fontSize: '1.25rem', textAlign: 'center' }}>{title}</Card.Title>
        <Card.Text style={{ fontWeight: 'bold', fontSize: '1rem', textAlign: 'center', color: '#555' }}>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
