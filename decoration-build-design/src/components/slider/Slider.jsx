import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
   <Carousel className='slider'>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./asset/img/sliderTwo.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='slider-one'>
          <h1>Evinizin İhtişamını Keşfedin</h1>
          <p>Estetik ve fonksiyonu bir araya getiren tasarımlarımızla evinizi dönüştürün.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./asset/img/sliderOne.jpg"
          alt="Second slide"/>
           <Carousel.Caption className='slider-two'>
          <h1>Zarafetin Sırrı</h1>
          <p>İnce detaylarda gizli olan zarif tasarımlarımızla mekanlarınıza karakter katın.</p>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./asset/img/sliderThree.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='slider-three'>
         <h1>Kişiselliğinizi Yansıtın</h1>
         <p>Size özel tasarımlarımızla evinizi kendi tarzınıza uygun hale getirin.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
