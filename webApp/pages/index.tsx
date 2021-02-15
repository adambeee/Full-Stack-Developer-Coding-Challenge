import Head from 'next/head'
import MainLayout, { siteTitle } from '../layout/main-layout'
import { retrieveCatalog } from '../lib/catalog'
import Link from 'next/link'
import CatalogTable from '../components/catalog-table'
import { GetStaticProps } from 'next'
import { AggregateElset } from '../models/aggregate-elset'

export default function Home({ catalogData }: {
  catalogData: AggregateElset[]
}) {
  return (
    <MainLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </MainLayout>
  )
}
