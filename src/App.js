import logo from './logo.svg';
import './App.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.1)'
}

const estilo = (bg='#333') => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})

//we could use props instead of object destructuring{}
//but it could be dificult to navigate through the available objects in the future
const ListItem = ({children}) => {
  return(
    <li style={{...estilo2, ...estilo('#057')}} className="clase-li">{children}</li>
  );
}

//we use className so we can pass css class to the component
const App = () => {
  return (
    <ul style={estilo('#750')} className="css-customClass">
      <ListItem>aaaa</ListItem>
    </ul>
  );
}

export default App;
