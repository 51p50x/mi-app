import {Component} from 'react'

class Button extends Component {
    render(){
        console.log('executing render method for button component');
        return(
            <button>Enviar</button>
        )
    }
}

class App extends Component{
    state = {valor:3}
    render(){
        console.log(this.state);
        return(
            <div>
                <p>Hola mundo</p>
                <Button/>
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