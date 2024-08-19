import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


const News=(props)=> {
  
 const [articles,setArticles] = useState([])
 const [page,setPage] = useState(1)
 const [totalresults,setTotalResults]= useState(0)

 const updateNews = async ()=>{
    props.setProgress(0);
    let url=`https://newsapi.org/v2/everything?q=${props.q}&from=2024-08-14&to=2024-08-14&apiKey=37b0cdf99c094c74af58a9c7fb45bd60&page=1&pagesize=${props.pagesize}`
    let data=await fetch(url)
    let parsedData=await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalresults)
    props.setProgress(100);
}
useEffect(()=>{
  document.title=`NewsInsight-${props.q}`
  updateNews()
},[])

const handlePrevClick = async()=>{
  props.setProgress(0);
  let url=`https://newsapi.org/v2/everything?q=${props.q}&from=2024-08-14&to=2024-08-14&sortBy=popularity&apiKey=37b0cdf99c094c74af58a9c7fb45bd60&page=${page - 1}&pagesize=${props.pagesize}`
    let data=await fetch(url)
    let parsedData=await data.json()
    setArticles(parsedData.articles)
    setPage(page-1)
    props.setProgress(100);
  }
  const handleNextClick = async()=>{
    props.setProgress(0);
    if(page>Math.ceil(totalresults/10)){

    }
    else{
    let url=`https://newsapi.org/v2/everything?q=${props.q}&from=2024-08-14&to=2024-08-14&sortBy=popularity&apiKey=37b0cdf99c094c74af58a9c7fb45bd60&page=${page + 1}&pagesize=${props.pagesize}`
    let data=await fetch(url)
    let parsedData=await data.json()
    setArticles(parsedData.articles)
    setPage(page+1)

    props.setProgress(100);
  }
  }

    return (
      <div className='container my-3 ' style={{backgroundColor:`#b8b8b8`}}>
        <h1 className='text-center' style={{marginTop:'90px'}}>NewsInsight-Top Headlines</h1>
        
        
        <div className="row">
        {articles.map((element) => {
          return  <div className="col-md-4 my-3" key={element.url}>
           <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
           </div>
            
        })}  
        <div className=" container d-flex justify-content-between">
         <button disabled={page<=1} type="button" class="btn btn-dark" onClick={handlePrevClick}>Previous</button>
         <button type="button" class="btn btn-dark" onClick={handleNextClick}>Next</button>
         </div>
        </div>
      </div>
    )
  
}

export default News
News.defaultProps={
  pageSize:12,
  category:'general'
}
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string
}
