import type { NextPage } from 'next'
import About from '../components/About'
import FloatingArrows from '../components/FloatingArrows'
import { MainContainer } from '../components/MainContainer'
import { Title } from '../components/Title'


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
      </div>
      <FloatingArrows key={'floating-arrows'}/>
    </MainContainer>
    <About />
  </>)
}

export default Home
