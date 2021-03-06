import * as React from 'react'
import { Fragment } from 'react'
import { Button, Grid } from 'semantic-ui-react'

import './Entrance.css'
import SearchInput from './SearchInput'

type Lens = 'job' | 'talent'

const Home = () => {
  const [lens, setLens] = React.useState<Lens>('talent')
  return (
    <Fragment>
      <Grid style={{ marginTop: '10em' }}>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Button
              fluid
              size="massive"
              primary={lens === 'talent'}
              secondary={lens !== 'talent'}
              onClick={() => setLens('talent')}
            >
              Find Talent
            </Button>
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              fluid
              size="massive"
              primary={lens === 'job'}
              secondary={lens !== 'job'}
              onClick={() => setLens('job')}
            >
              Find Odd Job
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={12}>
            <SearchInput className="fluid" placeholder={lens} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default Home
