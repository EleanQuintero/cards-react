/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import personajes from '../data/personajes'
import './Views.css'

function PersonajesViews({personajes}) {
  return (
    <div className='PersonajesViews' >
        <h1>{personajes.name}</h1>
        <h2>{personajes.description}</h2>
        <img src={personajes.image} 
             alt={personajes.name + "image"} />
    </div>
  )
}

export default PersonajesViews