import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globals/style'
import theme from './globals/theme'
import Navigation from './components/Navigation/navigation'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
    </ThemeProvider>
  )
}

export default App
