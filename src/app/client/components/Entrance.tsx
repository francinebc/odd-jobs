import * as React from 'react'
import { Fragment } from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'

import Header from './Header'
import SearchInput from './SearchInput'

type Lens = 'job' | 'talent'

const Entrance = (props: any) => {
  const [lens, setLens] = React.useState<Lens>('talent')
  return (
    <Container>
      <Header />
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Button
              fluid
              size="massive"
              primary
              onClick={() => setLens('talent')}
            >
              Find Talent
            </Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button
              fluid
              size="massive"
              secondary
              onClick={() => setLens('job')}
            >
              Find Odd Job
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <SearchInput className="fluid" placeholder={lens} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Entrance
