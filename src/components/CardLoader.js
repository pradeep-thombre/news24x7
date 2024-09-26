import React from 'react'
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export default function CardLoader() {
  return (
    <Card className="my-3">
        <Card.Img variant="top" src="https://htmlburger.com/blog/wp-content/uploads/2021/07/The-Best-50-Website-Preloaders-Around-the-Web-Example-36.gif" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={5} /> {' '} <Placeholder xs={5} /> 
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
  )
}
