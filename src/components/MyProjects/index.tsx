import { styled } from '@stitches/react'
import React from 'react'
import Card from './Card'


const Container = styled('section', {
  padding: 'clamp(10px, 4vw, 100px)',
  backgroundColor: '#2b2254'
})

const Title = styled('h1', {
  fontFamily: `'Oswald', sans-serif`,
  textTransform: 'uppercase',
  fontSize: 'clamp(1rem, 0.75rem + 1vw, 2rem)',
  letterSpacing: 'clamp(0.3rem, 0.3rem + 1vw, 2rem)',
  color: 'white'
})

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '20px',
  margin: '50px 0',
  
  '@media (min-width: 45em)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  }
})

export default function MyProjects() {
  return (
    <Container>
      <Title>
        My Projects
      </Title>
      <Grid>
        <Card
          title='LaModa'
          subtitle='I developed the new React version of the LaModa sales portal from scratch'
        />
        <Card
          title='AxonHub'
          subtitle='Maintenance and addition of new features'
        />
        <Card
          title='CheersTravel'
          subtitle='Development of the event scheduling and control app from scratch'
        />
        <Card
          title='QuickMenu'
          subtitle='Development of the digital menu app from scratch'
        />
      </Grid>
    </Container>
  )
}
