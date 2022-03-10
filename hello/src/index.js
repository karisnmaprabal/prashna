import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import Header from "./Components/header";
import Footer from './Components/footer'
import NewsList from './Components/news-list';
import JSON from './db.json';
import Life from './Components/lifecycle';
class App extends Component { 
  
  

state={
  news:JSON,
  filtered:JSON,
  footerText:'I am happy footer',
  active:true
}

getKeywords=(event)=>{
  

  let keywords =event.target.value;
  let filtered =this.state.news.filter((item)=>{
    return item.title.indexOf(keywords)> -1;
  });
  this.setState({
    filtered
  })
}




  render(){

    
const {footerText,filtered}=this.state;
    
    return(
  <>
          <Header
          keywords={this.getKeywords}
          
          
          />
          
          <NewsList news={filtered}>
          <br/>
          <h1>I am a childern</h1>
          
        

          </NewsList>

         
          {this.state.active ? 
            <Life/>
           :null}


          <button 
          onClick={()=>this.setState({active:!this.state.active})}
          >Action</button>

  <Footer footerText={footerText}/>
  </>

    )
}
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

