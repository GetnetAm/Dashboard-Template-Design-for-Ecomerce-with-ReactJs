import React, { useEffect, useState } from 'react'
import CardFiliter from '../card/CardFiliter';
import NewsPostionItem from './NewsPostionItem';
import "./News.css"
function News() {
    const [news, setNews]= useState([])
    const [filter, setFilter]= useState('Today');
    const handleFilterChange= filter =>{
        setFilter(filter)
    }

    useEffect(()=>{
        fetch("http://localhost:4000/news")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setNews(data);
        })
    })
  return (
    <div className='card'>
        <CardFiliter filterChange={handleFilterChange} />

        <div className='card-body-pb-0'>
            <h5 className='card-title'>
                News &amp; Update <span> | {filter} </span>

            </h5>
            <div className='news'>
                {
                    news &&
                    news.length>0 &&
                    news.map(item=>
                        <NewsPostionItem key={item._id} item={item}/>
                    )
                }

            </div>

        </div>
      
    </div>
  )
}

export default News
