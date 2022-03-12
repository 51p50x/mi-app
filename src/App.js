import Button from "./Button";

const arr = [
    'waifu feliz',
    'waifu triste',
    'waifu emocionada',
]

const App = () => {

    const miVariable = false

    if(miVariable){
        return <p>Mi Variable dio true</p>
    }

    return(
        <div>
            <h1 onClick={(e) => console.log('click', e)}>
                Hola Mundo
            </h1>
            {arr.map(el => <p key={el}>{el}</p>)}
            <Button onClick={()=>console.log('clicked')}>
                Enviarrrr
            </Button>
        </div>
    );
}

export default App