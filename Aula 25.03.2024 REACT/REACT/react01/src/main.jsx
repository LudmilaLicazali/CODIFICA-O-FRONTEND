import React from 'react' // imprtação da biblioteca react
import ReactDOM from 'react-dom/client' //vai renderizar o conteúdo
import {App} from './App.jsx' // é conteúdo principal (aplicação)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
