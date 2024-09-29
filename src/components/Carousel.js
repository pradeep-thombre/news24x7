import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { response } from './sampleOutput'

export default function CarouselBox() {
    const articles = response.articles.slice(0, 5)
    return (
        <Carousel className='my-3' data-bs-theme="dark" style={{ height: '60vh', width: '70%', margin: 'auto' }}>
            {articles.map((article) => (
                <Carousel.Item key={article.urlToImage} style={{ height: '60vh' }}>
                    <img
                        className="d-block w-100 shadow-lg bg-body-tertiary rounded"
                        src={article.urlToImage}
                        alt={article.source}
                        style={{ height: '100%', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h5>{article.title}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}

        </Carousel>
    );
}
