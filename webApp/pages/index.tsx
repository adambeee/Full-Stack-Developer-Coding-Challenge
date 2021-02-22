import Head from 'next/head'
import MainLayout, { siteTitle } from '../layout/main-layout'
import Link from 'next/link'
import Dashboard from '../components/dashboard'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Dashboard></Dashboard>
    </MainLayout>
  )
}
