import * as React from 'react'
import { Segment, Button } from 'semantic-ui-react'

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
        padding: '1em',
      }}
    >
      <div>About Us</div>
      <div>Odd Jobs</div>
      <div>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  )
}

export default Header
