import './modal.css'
import { useState } from 'react'

export const Modal = ({ children, title, click }) => {
  const [toggle, setToggle] = useState(false)

  const hadleClick = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <>
      <div className='buttonOpen'>
        <button onClick={hadleClick} className='open'>{click}</button>
        {
          toggle && (
            <div className='modal-container'>
              <div className='modal'>
                <header>
                  <h2>{title}</h2>
                  <button className='close' onClick={hadleClick}>x</button>
                </header>
                {children}
              </div>
            </div>
          )

        }
      </div>
    </>
  )
}
