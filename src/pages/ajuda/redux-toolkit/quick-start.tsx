import { styled } from '@stitches/react'
import React, { useEffect, useState } from 'react'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '50px'
})

const Title = styled('h2', {
  fontFamily: `'Merriweather', serif`,
  fontWeight: '700',
  textTransform: 'capitalize'
})

const Text = styled('p', {
  fontFamily: `'Roboto', sans-serif`,
  lineHeight: '25px'
})

const BasicLink = styled('a', {
  color: 'purple'
})

const Destaque = styled('div', {
  padding: '15px',
  borderRadius: '10px',
  variants: {
    color: {
      green: {
        backgroundColor: '#f1fdf9',
        borderLeft: '6px solid #00bf88',
      },
      blue: {
        backgroundColor: '#ecf4f9',
        borderLeft: '6px solid #2a98b9',
      }
    }
  },
  'h2': {
    fontFamily: `'Merriweather', serif`,
    fontWeight: '700',
    fontSize: '15px',
    textTransform: 'uppercase'
  },
  'p': {
    fontFamily: `'Roboto', sans-serif`,
  }
})

const Code = styled('code', {
  backgroundColor: '#3e3e3e',
  color: '#fafafa',
  fontSize: '16px',
  padding: '5px',
  borderRadius: '5px'
})

export default function QuickStart() {
  return (
    <Container>
      <Title style={{ fontSize: '45px' }}>
        Redux Toolkit Início Rápido
      </Title>

      <Destaque color='green'>
        <h2>
          O que você vai aprender?
        </h2>
        <ul>
          <li>
            <p>Como configurar e usar o Redux Toolkit com React-Redux</p>
          </li>
        </ul>
      </Destaque>
      <br />
      <Destaque color='blue'>
        <h2>
          pré requisitos
        </h2>
        <ul>
          <li>
            <p>Familiaridade com a sintaxe e as features do ES6</p>
          </li>
          <li>
            <p>Conhecimento das terminologias do React: JSX, State, Function Components, Props, e Hooks</p>
          </li>
          <li>
            <p>Entendimento dos conceitos do Redux</p>
          </li>
        </ul>
      </Destaque>
      <br /><br />
      <Title style={{ fontSize: '30px' }}>Introdução</Title>
      <Text>
        Bem vindo ao tutorial de início rápido do Redux Toolkit!
        <b style={{ marginLeft: '5px' }}>
          Este tutorial vai introduzir você rapidamente ao Redux Toolkit e te ensinar como começar a usar corretamente
        </b>
      </Text>

      <Title>Como ler este tutorial</Title>
      <Text>
        Esta página é focada em te ensinar apenas como configurar uma aplicação com Redux usando o Redux Toolkit e as principais API que você vai usar. Para explicações de o que é o Redux, como ele funciona, e exemplos completos de como usar o Redux Toolkit, <BasicLink href="https://redux-toolkit.js.org/tutorials/overview" target={'_blank'}>veja os tutoriais dessa página</BasicLink>
      </Text>
      <Text>
        Para esse tutorial, iremos assumir que você está usando o Redux Toolkit com React, mas você também pode usá-lo com outros frameworks. Os exemplos são baseados numa <BasicLink href='https://create-react-app.dev/docs/folder-structure' target='_blank'>estrutura de pastas típicas do "create-react-app"</BasicLink> onde todo o código da aplicação está no <Code>src</Code>, mas os padrões podem ser adaptados para qualquer configuração de pastas ou projetos que você estiver utilizando.
      </Text>
      <Text>O <BasicLink href='https://github.com/reduxjs/cra-template-redux' target='_blank'>template Redux+JS do create-react-app</BasicLink> já vem com as configuração deste tutorial pré configuradas.</Text>

      <Title style={{ fontSize: '30px' }}>Resumo de uso</Title>
      <Title>instalar Redux Toolkit e React-Redux</Title>
      <Text>Adicione os pacotes Redux Toolkit e React-Redux no seu projeto</Text>
    </Container>
  )
}
