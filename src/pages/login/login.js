
import { useNavigate } from 'react-router'
import './login.css'

export const Login = () => {
  const navigate = useNavigate()
  const click = () => {
    navigate('./home')
  }
  return (
    <>
      <h1>Login</h1>
      <form>
        <ul>
          <li>
            <input type='text' placeholder='Email'></input>
          </li>
          <li>
            <input type='password' placeholder='Senha'></input>
          </li>
          <li>
            <button type="button" onClick={click}>Entrar</button>
          </li>
        </ul>

      </form>
    </>
  )
}
