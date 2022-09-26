import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globals/style'
import theme from './globals/theme'
import HomePage from './page/HomePage'
import './globals/index.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
