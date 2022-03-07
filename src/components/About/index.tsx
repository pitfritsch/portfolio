import { styled } from '@stitches/react'
import React from 'react'

const Container = styled('section', {
  padding: 'clamp(10px, 4vw, 100px)',
})

const Title = styled('h1', {
  backgroundColor: '#3e3e3e',
  padding: '10px 50px',
  color: 'white',
  borderRadius: '5px',
  fontFamily: `'Oswald', sans-serif`,
  textTransform: 'uppercase',
  fontSize: 'clamp(1rem, 0.75rem + 1vw, 2rem)',
  letterSpacing: 'clamp(0.3rem, 0.3rem + 1vw, 2rem)',
  boxShadow: '5px 5px 5px -3px #00000082'
})

const Description = styled('p', {
  color: '#3e3e3e',
  fontFamily: `'Noto Serif', serif`,
  fontSize: 'clamp(1rem, 0.4rem + 1vw, 2rem)',
  textIndent: 'clamp(1rem, 1rem + 1vw, 2rem)'
})

export default function About() {
  return (
    <Container>
      <Title>
        About me
      </Title>
      <Description>
        I'm a front-end developer specialized on React.Js, I have at least 3 years of practical experience on big projects, like the internal system of the Unimed Vale do Caí, sales portal of La Moda, etc.
      </Description>
      <Description>
        When I develop a system, I'm passionate about performance and usability, for this I develop clean codes that are easy to read and maintain.
      </Description>
      <Description>
      It's easy for me to integrate into new teams and projects, as well as learn new technologies and frameworks.
      </Description>
    </Container>
  )
}
