import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head key={'head'}>
        <title>Portfolio | Pedro Fritsch</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <link
          key={'oswald'}
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&family=Roboto:wght@300;400;700&family=Merriweather:wght@300;400;700&family=Passion+One&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>
      <body key='body'>
        <Main key='main'/>
        <NextScript key='next-script' />
      </body>
    </Html>
  )
}