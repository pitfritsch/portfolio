import { styled } from '@stitches/react'
import React from 'react'
import { Repository } from '../../pages'

interface ProjectProps {
  repository: Repository
}

const Card = styled('a', {
  backgroundColor: 'rgb(243 243 243)',
  color: '#3e3e3e',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '1px 1px 5px -2px grey',
  transition: '200ms',

  '&:hover': {
    backgroundColor: 'white',
    transform: 'scale(1.02)',
  }
})

const Title = styled('h3', {
  fontFamily: `'Oswald', sans-serif`,
  textTransform: 'uppercase',
  fontWeight: 400,
  margin: 0
})

const Description = styled('p', {
  fontFamily: `'Merriweather', serif`,
  fontWeight: 300,
  margin: '10px 0'
})
const Language = styled('p', {
  fontFamily: `'Oswald', sans-serif`,
  textTransform: 'uppercase',
  marginBottom: 0,
  background: '#3e3e3e',
  padding: '2px 15px',
  borderRadius: '5px',
  color: 'white',
  width: 'fit-content'
})

export default function Project({ repository }: ProjectProps) {
  return (
    <Card href={repository.html_url} target='_blank '>
      <Title>
        {repository.name}
      </Title>
      <Description>
        {repository.description}
      </Description>
      {repository.language &&
        <Language>
          {repository.language}
        </Language>
      }
    </Card>
  )
}
