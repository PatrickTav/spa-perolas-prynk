import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Styled components para o provider de props
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme/theme'
import GlobalStyles from './styles/index'

//Routers
import {BrowserRouter, Route, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
