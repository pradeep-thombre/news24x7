import React, { useState } from 'react'
import NewsItem from './NewsItem'
import { response } from './sampleOutput';
import CardLoader from './CardLoader';
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from './Pagination';

export default function News() {
    const ALL_ARTICLES = response.articles
    const totalResults = response.totalResults
    const lastPage = Math.ceil(totalResults / 8)

    const [articles, setArticles] = useState(ALL_ARTICLES.slice(0, 8))
    const [currentPage, setCurrentPage] = useState(1)
    // const [loading, setLoading] = useState(false)
    const loading = false

    return (
        <div className="my-3 mx-3">
            <CardGroup>
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <CardLoader key={index} />
                    ))
                ) : (
                    articles.map((element) => (
                        <div className='col-md-3' key={element.description}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsImage={element.url} />
                        </div>
                    ))
                )}
            </CardGroup>
            <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                onPageChange={(newPage) => {
                    var startIndex = (newPage - 1) * 8 //considering pagesize of 8
                    setCurrentPage(newPage)
                    setArticles(ALL_ARTICLES.slice(startIndex, startIndex + 8))
                }}
            />
        </div>
    )
}
