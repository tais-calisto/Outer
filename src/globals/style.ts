import { createGlobalStyle } from 'styled-components'
import './fonts.css'

const globalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: 0.2s all linear;
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

.newsLabel{
    font-family: 'Montserrat', serif;
    
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

body{
    transition: 0.5s ease-in-out;

    background-color: #EBF1F1;
}

.first{
    background-color: #1C203E;
}
.second{
    background-color: #36C09F;
}
.third{
    background-color: #A4B6DD;
}
.fourth{
    background-color: #1C203E;
}


@media screen and (max-width: 568px){
    h1{
    font-size: 2rem;
}

h2{
    font-size: 1.8rem;
}

p, label, input, textarea{
    font-size: 1rem;
}

}

`

export default globalStyle
