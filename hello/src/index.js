import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import Header from "./Components/header";

class App extends Component {  



  render(){
    console.log()
    return(
  <>
          <Header/>
  
  </>
    )
}
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

