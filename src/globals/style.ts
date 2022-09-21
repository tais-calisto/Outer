import { createGlobalStyle } from 'styled-components'
import '@fontsource/montserrat'
import '@fontsource/hind'

const globalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

p,li,a,button,input{
    font-family: 'Hind', sans-serif;
}

h1,h2,h3,h4{    
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
`

export default globalStyle
