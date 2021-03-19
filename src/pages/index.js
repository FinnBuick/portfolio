import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout, Intro, Background, Projects, Footer } from '@components'

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Finn Buick</title>
        <link rel="canonical" href="https://finnbuick.com/" />
      </Helmet>
      <Intro />
      <Background />
      <Projects />
      <Footer />
    </Layout>
  )
}
