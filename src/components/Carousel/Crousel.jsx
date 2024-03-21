import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../Assets/banner.png'
import './Carousel.css'

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" style={{width:"100%"}}>
      <Carousel.Item>
        <div className='imgcon'>
        <img
          className="d-block w-100 imagee"
          src="https://img.beatxp.com/prod/categories/banner/protein%20banner%20mobile.webp"
          alt="First slide"
          // style={{objectFit: "fill"}}
        />
        </div>
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className='imgcon'>
        <img
          className="d-block w-100 imagee"
          src={banner}
          alt="First slide"
        />
        </div>
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <div className='imgcon'>
        <img
          className="d-block w-100 imagee"
          src={banner}
          alt="First slide"
        />
        </div>
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;