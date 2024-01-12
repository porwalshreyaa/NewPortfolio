import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardF({title, text, url, image}) {
  return (
    
    <Card className='bg-transparent' data-bs-theme="dark" style={{ margin: 0.5 + "em", width: '16rem', padding:0, borderRadius:3+'%'}}>
      <a href={url} target='_blank'><Card.Img style={{aspectRatio:256/180, borderStyle:'none', borderRadius:3+'%'}}src={image} />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardF;