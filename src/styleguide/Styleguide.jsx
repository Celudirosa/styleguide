import Nav from './components/Nav'
import Buttons from '../components/buttons/Buttons'
import './Styleguide.scss'

export default function Styleguide() {
  return (
    <>
      <Nav />
      <p>Hola, soy Styleguide</p>
      <section className='styleguide_h'>
        <h1>Esto es un H1</h1>
        <h2>Esto es un H2</h2>
        <h3>Esto es un H3</h3>
        <h4>Esto es un H4</h4>
        <h5>Esto es un H5</h5>
        <h6>Esto es un H6</h6>
      <Buttons />
      </section>
    </>
  )
}