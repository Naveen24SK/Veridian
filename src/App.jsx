import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme/theme';
import Home from './Pages/Home/home';
import './App.css'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Home />
      </ThemeProvider>
    </>
  )
}

export default App
