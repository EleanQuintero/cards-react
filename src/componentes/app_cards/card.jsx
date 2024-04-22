import './Card.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card({title='titulo por defecto', description='descripcion por defecto', img} ) {
  return (
    <section className='Card'>
        <img src={img} alt="" />
        <Link className='link' to={title} ><h1>{title}</h1></Link>
        <p>{description}</p>
    </section>
  )
}

export default Card