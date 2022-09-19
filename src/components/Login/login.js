import './login.css'

export const Loginpage = ({ children, title }) => {
  return (
    <>
      <div className='login-container'>
        <div className='login'>
          <header>
            <h2>{title}</h2>
          </header>
          {children}
        </div>
      </div>

    </>
  )
}
