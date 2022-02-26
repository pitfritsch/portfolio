import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head key={'head'}>
        <link
          key={'oswald'}
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&family=Passion+One&display=swap"
          rel="stylesheet"
        />
        <link
          key={'noto-serif'}
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body key='body'>
        <Main key='main'/>
        <NextScript key='next-script' />
      </body>
    </Html>
  )
}