import { styled } from '@stitches/react'
import React from 'react'

interface CardProps {
  title: string
  subtitle: string
  href?: string
}

const Container = styled('a', {
  padding: '20px',
  background: 'white',
  borderRadius: '20px'
})

const Title = styled('h3', {
  fontFamily: `'Oswald', sans-serif`,
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: 'clamp(1rem, 0.5rem + 1vw, 2rem)',
  letterSpacing: '0.2rem',
  color: '#3e3e3e'
})

const Subtitle = styled('p', {
  color: '#3e3e3e',
  fontFamily: `'Merriweather', serif`,
  fontSize: 'clamp(1rem, 0.4rem + 1vw, 2rem)',
  textAlign: 'center',
})

export default function Card({ title, subtitle, href }: CardProps) {
  return (
    <Container href={href} target={'_blank'}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
