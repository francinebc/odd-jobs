import * as React from 'react'
import { Fragment } from 'react'
import Home from './Home'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './Entrance.css'
import Header from './Header'
import Login from './Login';
import SignUp from './SignUp';

type Lens = 'job' | 'talent'

const Entrance = () => {
  const [lens, setLens] = React.useState<Lens>('talent')
  return (
    <Router>
      <Fragment>
        <div className="background-image">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
        </div>
      </Fragment>
    </Router>
  )
}

export default Entrance
