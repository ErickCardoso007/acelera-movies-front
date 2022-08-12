import './modal.css'
import { useState } from 'react'

export const Modal = () => {
  const [toggle, setToggle] = useState(false)

  const hadleClick = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <>
      <button onClick={hadleClick} className='open'>Clique aqui!</button>
      {toggle && (
        <div className='modal-container'>
          <div className='modal'>
            <header>
              <h2>Titulo da modal</h2>
              <button className='close' onClick={hadleClick}>x</button>
            </header>
            <p>conteudo da modal</p>
          </div>
        </div>)
      }

    </>
  )
}
