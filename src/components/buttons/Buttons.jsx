import './buttons.scss';

export default function Buttons() {
  return (
    <>
      <section className='styleguide_h'>
        <h1>Buttons</h1>
        <button className="btn btn-primary">Button P</button>
        <button className="btn btn-secondary">Button S</button>
        <button className="btn btn-cta">Button CTA</button>
        <a className='btn btn-primary' href="">Button P</a>
        <a className='btn btn-secondary' href="">Button S</a>
        <a className='btn btn-cta' href="">Button CTA</a>
      </section>
    </>
  )
}