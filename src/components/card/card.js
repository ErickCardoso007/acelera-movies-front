import './card.css'

export const Card = ({ children, title }) => {
  return (
    <>
      <div className='card-container'>
        <div className='card'>
          <header>
            <h2>{title}</h2>
          </header>
          {children}
        </div>
      </div>

    </>
  )
}
