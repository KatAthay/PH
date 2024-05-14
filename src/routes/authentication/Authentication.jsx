import SignUpForm from '../../components/sign-up-form/Sign-up-form'
import SignInForm from '../../components/sign-in-form/Sign-in-form'
import './authentication.styles.scss'

const Authentication = () => {
  const handleLogin = () => {
    window.location.href = '/'
    console.log('Login successful');
  }
  return (
    <div className="authentication-container">
      <div className="sign-in-form">
        <SignInForm onLogin={handleLogin}/>
      </div>
      <div className="sign-up-form">
        <SignUpForm onLogin={handleLogin}/>
      </div>
    </div>
  )
}

export default Authentication
