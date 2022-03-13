import {Component} from 'react'

// constructor -> render -> componentDidMount
class Button extends Component {
    state = {}
    
    constructor(props){
        super(props)
        console.log('constructor', props);
    }

    render(){
        console.log('executing render method for button component');
        return(
            <button onClick={()=>this.setState({prop: 1})}>
                Enviar
            </button>
        )
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component did update', prevProps, prevState);
    }

    componentWillUnmount(){
        console.log('unmounting component', this.props, this.state);
    }
}

class App extends Component{
    state = {valor:3}
    render(){
        console.log(this.state);
        return(
            <div>
                <p>Hola mundo</p>
                {this.state===3 ?
                <Button waifu="happy" /> : null}
                <button 
                    className={`${this.state.valor}`} 
                    onClick={()=> this.setState({valor: 2})}
                >
                    Enviar en App
                </button>
                <p>{this.state.valor}</p>
            </div>
        )
    }
}

export default App