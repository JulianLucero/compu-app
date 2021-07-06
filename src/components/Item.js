import React from 'react';
import ItemCount from './ItemCount';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <Card
      className="shadow-lg p-3 mb-5 bg-body rounded-4"
      style={{ width: '18rem', margin: ' 10px auto' }}
    >
   <div id={props.id}>
      
      <Card.Img variant="top" src={props.thumbnailUrl} />
      <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <h4>${props.precio}</h4>
      <Card.Text>{props.description}</Card.Text>
      <p><small>Nos quedan {props.stock} unidades</small></p>      
      
      <Button
      variant="secondary"
            as={Link}
            to={{
              pathname: `/product/${props.id}`,
              state: {
                text: props.text,
                title: props.title,
              },
            }}
          >
            Más Info

      </Button>
      {/*{ItemCount > 0 ? (
            <Button variant="primary">Comprar</Button>
          ) : (
            <Button variant="primary disabled">Comprar</Button>
          )} */}
      </Card.Body>
   </div>
  
   </Card>
  )
}

