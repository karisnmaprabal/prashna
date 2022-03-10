import React from 'react'
import NewsItem from './news-list-item';
const newsList = (props) => {
const news=props.news.map((item)=>(
    <NewsItem item={item} key={item.id} name="karishma" age="21"/> 
     
   
         ))

  return (
      <>
      {news}
      { props.children}
     
      
      
      </>

  )
}
export default newsList;