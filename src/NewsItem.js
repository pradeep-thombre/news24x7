import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl,newsImage } = this.props;
        return (
            <div className="card my-3">
                <img className="card-img-top" height="220px" alt='...' src={imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{title && title.slice(0,50)}</h5>
                    <p className="card-text">{description && description.slice(0,90)}</p>
                    <a href={newsImage} rel="noreferrer" target="_blank" className='btn btn-primary btn-sm'>Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
