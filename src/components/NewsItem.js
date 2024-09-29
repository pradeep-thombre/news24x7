import React from 'react'
import Card from 'react-bootstrap/Card';

function NewsItem(props) {
    let { title, description, imageUrl, newsImage, source } = props;
    return (
        <Card border='0' className="my-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} style={{ height: '10rem' }} />
            <Card.Body>
                <Card.Title>{title && title.slice(0, 50)}</Card.Title>
                <Card.Text>{description && description.slice(0, 90)}</Card.Text>
            </Card.Body>
            <Card.Link href={newsImage} rel="noreferrer" target="_blank" className='btn btn-primary btn-sm'>Read More</Card.Link>
            <Card.Footer className="text-muted">{source}</Card.Footer>
        </Card>
    );
}

export default NewsItem;
