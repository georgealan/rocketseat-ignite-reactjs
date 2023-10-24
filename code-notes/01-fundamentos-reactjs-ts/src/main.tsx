import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // In situations where we want TS ignore null element warning we use ! in the final.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
