import {Component} from 'react'

class Button extends Component {
    
}

class App extends Component{
    state = {valor:3}
    render(){
        console.log(this.state);
        return(
            <div>
                <p>Hola mundo</p>
                <button 
                    className={`${this.state.valor}`} 
                    onClick={()=> this.setState({valor: 2})}
                >
                    Enviar
                </button>
                <p>{this.state.valor}</p>
            </div>
        )
    }
}

export default App