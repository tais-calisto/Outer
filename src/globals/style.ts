import { createGlobalStyle } from 'styled-components'
import './fonts.css'

const globalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


p,li,a,button,input, label{
    font-family: 'Hind', sans-serif;
}

h1,h2,h3,h4{    
    font-family: 'Montserrat', serif;
    font-weight: bold;
}

h1{
    font-size: 3rem;
}

h2{
    font-size: 2rem;
}

p, label{
    font-size:1.3rem;
}




li,a{
    list-style: none;
    text-decoration: none;
}

button{
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    padding: 0.4rem;
    font-weight: bold;
    cursor: pointer; 
}

input, textarea{
border-radius: 10px;
padding: 0.5rem;
font-size: 1.1rem;

};

`

export default globalStyle
