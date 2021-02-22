import Head from 'next/head'
import styles from './main.module.css'
import Link from 'next/link'
import StatusBar from '../components/status-bar'

export const siteTitle = 'SuperSATCAT'

export default function MainLayout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="GRM"
          content="GRM"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StatusBar></StatusBar>
      <div className="astro-telemetry-pane">
        <div className="grid-zone grid-zone--main">
            <div className="grid-zone grid-zone--main__content">
              {children}
            </div>
        </div>
      </div>
    </>
  )
}