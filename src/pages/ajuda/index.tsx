import { styled } from '@stitches/react'
import Link from 'next/link'
import React from 'react'

export const CenteredContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export default function Ajuda() {
  return (
    <CenteredContainer>
      <Link href={'/ajuda/redux-toolkit'}>React Redux Toolkit</Link>
    </CenteredContainer>
  )
}
