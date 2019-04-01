import * as React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getToken, clearToken } from '../utils/token';

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
      <Link to ='/'>Odd Jobs</Link>
      <div>
        {!getToken() && 
        <div>
          <Link to='/login'>
            <Button>Log In</Button>
          </Link>
          <Link to='/sign-up'>
            <Button>Sign Up</Button>
          </Link>
        </div>}      
        {getToken() && 
        <div>
          <Button onClick={() => {clearToken()}}>Log Out</Button>
        </div>}    
      </div>
    </div>
  )
}

export default Header
