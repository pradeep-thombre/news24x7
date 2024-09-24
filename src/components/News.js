import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import { response } from './sampleOutput';

export class News extends Component {
    articles = response.articles
    totalResults = response.totalResults
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            totalResults: this.totalResults,
            page: 123,
            loading: false
        }
    }

    // async componentDidMount() {
    //     let url = "https://newsapi.org/v2/top-headlines?country=us&page=2&apiKey=37f5493b55484f038769de0a07907088"
    //     let data = await fetch(url)
    //     let parsedData=await data.json()
    //     console.log("data",parsedData)
    //     this.setState({articles:parsedData.articles})
    // }

    handlePrevious=()=> {
        console.log("previous")
        this.setState ({
            articles: this.state.articles,
            page: this.state.page + 1,
            totalResults: this.state.totalResults
        })
        console.log(this.state.page)
    }

    handleNext=()=> {
        console.log("next")
        this.setState ({
            articles: this.state.articles,
            page: this.state.page + 1,
            totalResults: this.state.totalResults
        })
        console.log(this.state.page)
    }

    render() {
        return (
            <div className="container my-3 ">
                <h2>Top Heading's</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-3' key={element.description}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsImage={element.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button className='btn btn-primary' disabled={this.state.page <= 1} onClick={this.handlePrevious}>{"<< Previous"}</button>
                    <button className='btn btn-primary' disabled={this.totalResults - (this.state.page * 20) < 20} onClick={this.handleNext}>{"Next >>"}</button>
                </div>
            </div>
        )
    }
}

export default News