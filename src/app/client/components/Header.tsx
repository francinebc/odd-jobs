import * as React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: 'white',
        padding: '1em'
      }}
    >
      <div>About Us</div>
      <div>Odd Jobs</div>
      <div>
        <Link to="/login">
          <Button>Log In</Button>
        </Link>
        <Button>Sign Up</Button>
      </div>
    </div>
  )
}

export default Header
