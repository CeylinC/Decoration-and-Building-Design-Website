import Card from 'react-bootstrap/Card';
import "./ServiceCard.css";


function ServiceCard({data: { img, title, text}}) {
  return (
    <Card className='service-card'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text className='card-text'>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;