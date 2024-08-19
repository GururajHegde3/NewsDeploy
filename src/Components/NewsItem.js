import React from 'react'

const NewsItem=(props)=> {
 
    let {title,description,imageUrl,newsUrl,author,date} =props
    return (
      <div >
        <div className="card  text-bg-dark"  style={{width: "18rem"}}>
          <img src={!imageUrl?"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-07/240715-perseid-meteor-mn-1345-c8cc89.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <a href={ newsUrl } target="_blank" className="btn btn-sm btn-primary">Check</a>
            <p className="card-text"><small className="text-body-primary my-3">By {!author?"unkown":author} on {new Date(date).toUTCString()}</small></p>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
