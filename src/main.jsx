import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import personajes from './data/personajes.js'
import PersonajesViews from './views/PersonajesViews.jsx'


const routes = [
  {
    path: "/",
    element: <App />

  }
];

personajes.forEach(personajes =>{
  routes.push({
    path: personajes.name,
    element: <PersonajesViews personajes={personajes}/>
  })
}) 

const router = createBrowserRouter (routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
