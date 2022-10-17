
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
        <form>
          <div className='email'>
            <input className='input1' value={email} onChange={handleChangeEmail} placeholder='E-mail' type='text' required />
          </div>
          <div className='senha'>
            <input className='input2' value={password} onChange={handleChangeSenha} placeholder='Password' type='password' required />
          </div>
          <div className='button-login'>
            <button className='buttonLogin' type="button" onClick={click}>Login</button>
          </div>
        </form>
      </Loginpage >
    </>
  )
}
