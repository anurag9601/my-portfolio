import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StorageOfContext from './Context/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StorageOfContext>
    <App />
    </StorageOfContext>
  </React.StrictMode>,
)
