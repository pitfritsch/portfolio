import { styled } from '@stitches/react'
import React from 'react'
import Card from './Card'


const BlueContainer = styled('section', {
  padding: 'clamp(10px, 4vw, 100px) clamp(10px, 20vw, 20vw)',
  backgroundColor: '#2b2254',
  '@media (orientation: portrait)': {
    padding: '10px'
  }
})

const Title = styled('h1', {
  fontFamily: `'Oswald', sans-serif`,
  textTransform: 'uppercase',
  fontSize: 'clamp(1rem, 0.75rem + 1vw, 2rem)',
  letterSpacing: 'clamp(0.3rem, 1vw, 2rem)',
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
    <BlueContainer>
      <Title>
        Professional Projects
      </Title>
      <Grid>
        <Card
          title='LaModa'
          subtitle='Development from scratch of the new LaModa sales portal using NextJs'
          href='https://www.lamoda.com.br/'
        />
        <Card
          title='AxonHub'
          subtitle='Maintenance and addition of new features'
          href='https://www.axonhub.com.br/'
        />
        <Card
          title='CheersTravel'
          subtitle='Development of the event scheduling and control app from scratch'
          href='https://www.cheerstravel.com.br/'
        />
        <Card
          title='QuickMenu'
          subtitle='Fullstack development of the digital menu app from scratch, using NestJs and NextJs (deprecated)'
        />
        <Card
          title='Unimed Vale do Caí'
          subtitle='Maintenance and addition of new features'
          href='https://www.unimed.coop.br/web/valedocai/'
        />
      </Grid>
    </BlueContainer>
  )
}
