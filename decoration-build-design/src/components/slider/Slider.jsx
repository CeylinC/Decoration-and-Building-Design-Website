import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import sliderOne from "../../asset/img/sliderTwo.jpg";
import sliderTwo from "../../asset/img/sliderOne.jpg";
import sliderThree from "../../asset/img/sliderThree.jpg";

function Slider() {
  return (
   <Carousel className='slider'>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={sliderOne}
          alt="First slide"
        />
        <Carousel.Caption className='slider-one'>
          <h1>Evinizin İhtişamını Keşfedin</h1>
          <p>Estetik ve fonksiyonu bir araya getiren tasarımlarımızla evinizi dönüştürün.</p>
          <Button href="#" variant="dark">Daha Fazlasını Öğren</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={sliderTwo}
          alt="Second slide"/>
           <Carousel.Caption className='slider-two'>
          <h1>Zarafetin Sırrı</h1>
          <p>İnce detaylarda gizli olan zarif tasarımlarımızla mekanlarınıza karakter katın.</p>
          <Button href="#" variant="dark">Daha Fazlasını Öğren</Button>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={sliderThree}
          alt="Third slide"
        />
        <Carousel.Caption className='slider-three'>
         <h1>Kişiselliğinizi Yansıtın</h1>
         <p>Size özel tasarımlarımızla evinizi kendi tarzınıza uygun hale getirin.</p>
         <Button href="#" variant="dark">Daha Fazlasını Öğren</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
