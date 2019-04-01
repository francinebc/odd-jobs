import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { Fragment } from 'react'
import { Grid } from 'semantic-ui-react'

import { getToken } from '../utils/token'


const SignUp = () => {
  const [email, setEmail] = React.useState<string>('')
  const [firstName, setFirstName] = React.useState<string>('')
  const [lastName, setLastName] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const handleSubmit = () => {
    // send stuff to api to try to login 
  }

  if (getToken()) {
    return <Redirect to="/" />
  }
  return (
    <Fragment>
    <Grid style={{ marginTop: '10em' }}>
      <Grid.Row centered>
        <Grid.Column width={6}>
          <div className="ui input">
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            Sign Up
          </button>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default SignUp