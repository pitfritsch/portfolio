import { styled } from '@stitches/react'
import type { NextPage } from 'next'
import About from '../components/About'
import FloatingArrows from '../components/FloatingArrows'
import { MainContainer } from '../components/MainContainer'
import { Title } from '../components/Title'

const SubTitle = styled('h3', {
  fontFamily: `'Noto Serif', serif`,
  color: 'white',
  textTransform: 'uppercase',
  background: 'linear-gradient(45deg, #3e3e3e, transparent)',
  padding: '2px 15px',
  borderRadius: '2px 10px 10px 2px',
  fontSize: 'clamp(1rem, 0.50rem + 1vw, 2rem)',
  fontStyle: 'italic'
})

const Home: NextPage = () => {
  return (<>
    <MainContainer>
      <div key={'my-name'}>
        <Title key={'pedro'}>
          Pedro
        </Title>
        <Title key={'averbeck'}>
          Averbeck
        </Title>
        <Title key={'fritsch'}>
          Fritsch
        </Title>
        <SubTitle>
          Frontend Developer
        </SubTitle>
      </div>
      <FloatingArrows key={'floating-arrows'}/>
    </MainContainer>
    <About />
  </>)
}

export default Home
