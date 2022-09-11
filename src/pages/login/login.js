
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Card } from '../../components/card/card'
import { client } from '../../service/client'
import './login.css'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangeSenha = (e) => {
    setPassword(e.target.value)
  }

  const navigate = useNavigate()
  const url = '/login'

  const click = () => {
    client.post(url, {
      senha: password,
      email: email
    })
      .then(response => {
        if (response.data.auth === true) {
          alert(response.data.message)
          navigate('/home')
        } else {
          alert(response.data.message)
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <>

      <Card title="Login" click="open modal">
        <form className='form'>
          <ul>
            <div className='email'>
              <li className='liLogin'>
                <input className='input1' value={email} onChange={handleChangeEmail} type='text' required />
                <label className='label1'>email</label>
              </li>
            </div>
            <div className='senha'>
              <li className='liLogin'>
                <input className='input2' value={password} onChange={handleChangeSenha} type='password' required />
                <label className='label2'>senha</label>
              </li>
            </div>
            <li className='button-login'>
              <button className='buttonLogin' type="button" onClick={click}>Entrar</button>
            </li>
          </ul>
        </form>
      </Card >
    </>
  )
}
