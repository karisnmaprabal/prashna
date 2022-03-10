import React from 'react'
const NewsItem =({item})=>{

    console.log(item)
return(
    <div ClassName='news-item'>
   <h3>{item.title}</h3>
   <div>
   {item.feed}
   </div>
 </div>
           
)
}


export default NewsItem;