import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { getToken, setToken } from '../utils/token'
import { login } from '../api/auth';

const Login = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [error, setError] = React.useState<string>('')

  const handleSubmit = () => {
    login({email, password})
    .then(data => {
      setToken(data.token)
      location.reload()
    })
    .catch(error => {
      setError(error.response.body.message)
    })
  }

  if (getToken()) {
    return <Redirect to="/" />
  }
  
  return (
    <div>
      <div className="ui input">
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="ui button" onClick={handleSubmit}>
        Login
      </button>
      {error && <p>That email or password is incorrect</p>}
    </div>
  )
}

export default Login
