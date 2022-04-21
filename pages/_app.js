import 'bootswatch/dist/minty/bootstrap.min.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portafolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp