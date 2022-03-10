import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// create custom component without JSX non-recommended
// this will ouput <p>hello world</p>
const ComponentNonJsx = React.createElement('p', null, 'hello world');

//JSX is similar to HTML but is not the same
const ComponentJsx = <p>hello world1</p>;

// Adding dynamic content to our Functional Component
// we need to pass properties to the child component
// we made an object destructuring
const Li = ({children, estado, casa, edad}) =>{
  console.log(casa, edad);
  return(
    <li>{children} {estado}</li>
  );
} 

// if we create the JSX component inside a function is called Functional Component
// to call the functional component insder our render we need to write it as JSX
// like for example <FunctionalComponent />
const FunctionalComponent = () =>
  <ul>
    <Li 
    estado={'happy'}
    casa={false}
    edad={24}
    >
    jeanne
    </Li>
    <Li
      estado={'sad'}
    >meltryllis</Li>
    <Li
      estado={'happy'}
    >shinobu</Li>
  </ul>

/* ReactDOM.render is the function that we use to render content
* for our application
* @param {object} renderElement - object that we want to render
* @param {element} htmlElement - object where our render would be shown
*/
ReactDOM.render(
  <FunctionalComponent/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
