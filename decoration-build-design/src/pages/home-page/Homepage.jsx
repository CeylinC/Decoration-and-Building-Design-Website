import './Homepage.css';
import ServiceCardList from '../../components/services-card-list/ServiceCardList';
import Slider from '../../components/slider/Slider';

function Homepage() {
  return (
    <div id='homepage'>
      <Slider/>
      <ServiceCardList />
    </div>
  );
}

export default Homepage;