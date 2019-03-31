import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { getToken } from '../utils/token'

const Login = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const handleSubmit = () => {
    // send stuff to api to try to login 
  }

  if (getToken()) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <div className="ui input">
        <input
          type="text"
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
    </div>
  )
}

export default Login
