import { keyframes, styled } from "@stitches/react"

const bg = keyframes({
  '0%': {
    backgroundPosition: '0%',
    backgroundColor: '#561414'
  },
  '50%': {
    backgroundPosition: '100%',
    backgroundColor: '#142e56'
  },
  '100%': {
    backgroundPosition: '0%',
    backgroundColor: '#003908'
  },
})

export const MainContainer = styled('section', {
  height: '100vh',
  // backgroundColor: '#3e3e3e',
  display: 'flex',
  alignItems: 'center',
  padding: 'clamp(10px, 4vw, 100px)',
  background: 'radial-gradient(transparent, #000000c2)',
  backgroundSize: '500%',
  backgroundColor: 'red',
  animation: `${bg}`,
  animationDuration: '15s',
  animationTimingFunction: 'linear',
  animationDirection: 'alternate',
  animationIterationCount: 'infinite'
})