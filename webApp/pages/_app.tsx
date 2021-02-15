import "../styles/astro-theme.scss";
import '../styles/astro.core.css'
import '../styles/astro.css'

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}