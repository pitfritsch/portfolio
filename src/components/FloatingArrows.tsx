
import { keyframes, styled } from '@stitches/react'
import React from 'react'


const float = keyframes({
  '0%': {
    transform: 'rotate(45deg) translate(0px, 0px)',
  },
  '25%': {
    transform: 'rotate(45deg) translate(2px, 2px)',
  },
  '50%': {
    transform: 'rotate(45deg) translate(8px, 8px)',
  },
  '100%': {
    transform: 'rotate(45deg) translate(25px, 25px)',
  },
})

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

const Arrow = styled('div', {
  height: 'clamp(1rem, 0.75rem + 1vw, 25vh);',
  width: 'clamp(1rem, 0.75rem + 1vw, 25vh);',
  backgroundColor: 'transparent',
  transform: 'rotate(45deg)',
  border: '2px solid white',
  borderLeft: 'none',
  borderTop: 'none',
  animation: `${float}`,
  animationDuration: '750ms',
  animationTimingFunction: 'linear',
  animationDirection: 'alternate',
  animationIterationCount: 'infinite',
  variants: {
    delay: {
      'first': {
        animationDelay: '250ms'
      },
      'second': {
        animationDelay: '500ms'
      }
    }
  }
})

export default function FloatingArrows() {
  return (
    <Container>
      <Arrow key='first' />
      <Arrow key='second' delay='first' />
      <Arrow key='third' delay='second'/>
    </Container>
  )
}
