
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { client } from '../../service/client'
import { Loginpage } from '../../components/Login/login'
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
          location.reload()
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <>

      <Loginpage title="Login" click="open modal">
        <form className='form'>
          <ul>
            <div className='email'>
              <li className='liLogin'>
                <input className='input1' value={email} onChange={handleChangeEmail} placeholder='E-mail' type='text' required />

              </li>
            </div>
            <div className='senha'>
              <li className='liLogin'>
                <input className='input2' value={password} onChange={handleChangeSenha} placeholder='Password' type='password' required />

              </li>
            </div>
            <li className='button-login'>
              <button className='buttonLogin' type="button" onClick={click}>Entrar</button>
            </li>
          </ul>
        </form>
      </Loginpage >
    </>
  )
}
