import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import { Box } from '@mui/material'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Box >
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Box>
)
