import React,{Component} from 'react'


class Life extends Component {
constructor(props){ 
    super(props);
    this.state ={ name:'Francis' }
    console.log('1-constructor');
}

static getDerivedStaterFomProps(){
    console.log('2-getDerivedStateFromProps')
    return null;
 }

componentDidMount(){
    console.log('4-componentDidMount')
}

componentWillUnmount(){
    console.log('5-componentWillUnmount')
}
    render(){
        console.log('3-render')
        return(
            <div>
            <div onClick={()=> this.setState({name:'Ron'})}>
            change name
            
            
            
            </div>
            </div>
        )
    }

}


export default Life;
