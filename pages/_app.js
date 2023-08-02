import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import { Open_Sans, Inter } from 'next/font/google'
import Head from 'next/head';
const font = Inter({subsets: ['latin']});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KeDA Front-End Test</title>
      </Head>
      <div className={`${font.className} text-slate-700`} id="root">
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </>
  )
}
