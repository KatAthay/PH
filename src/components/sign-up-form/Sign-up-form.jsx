import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../form-input/Form-input'
import Button from '../button/main-button/Button'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = ({ onLogin }) => {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const [showPassword, setShowPassword] = useState(false)
  const [type, setType] = useState('password')

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // confirm passwords match
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    // see if weve authenticed with email and password
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user, { displayName })

      resetFormFields()
      onLogin()
      navigate('/')
      window.scrollTo(0, 0);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('user creation encountered an error', error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }
  const handleToggle = () => {
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'))
  }
  return (
    <>
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Create Account</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <div className="password-container">
          <FormInput
            label="Password"
            type={type}
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="eye-icon-container" onClick={handleToggle}>
            <Icon icon={type === 'password' ? eyeOff : eye} size={25} />
          </div>
        </div>
        <div className="password-container">
          <FormInput
            label="Confirm Password"
            type={type}
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            autoComplete="new-password"
          />
          <div className="eye-icon-container" onClick={handleToggle}>
            <Icon icon={type === 'password' ? eyeOff : eye} size={25} />
          </div>
        </div>
        <div className='sign-up-btn'>
          <Button buttonType="inverted" type="submit">
            Sign Up
          </Button>
        </div>
       
      </form>
    </div>
    </>
  )
}

export default SignUpForm
