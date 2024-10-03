import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "20px",marginBottom:"70px" }}> 
      <Carousel data-bs-theme="dark" interval={2000} controls={false} pause="hover" indicators={false}>
        <Carousel.Item>
          <img
            style={{ height: "400px", objectFit: "cover" }} 
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61x-i5JVqiL._AC_SY675_.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "400px", objectFit: "cover" }} 
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61mZ6mMyy4L._AC_SY695_.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "400px", objectFit: "cover" }}  
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71HuGWWouwL._AC_SY675_.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "400px", objectFit: "cover" }} 
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71zJl5k20cL._AC_SY675_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "400px", objectFit: "cover" }}  
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71DTJrPiBqL._AC_SY675_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default DarkVariantExample;
