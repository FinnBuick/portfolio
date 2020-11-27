import React from "react"
import { Helmet } from "react-helmet"
import { Layout, Intro, Background, Projects, Footer } from "@components"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Finn Buick</title>
        <link rel="canonical" href="http://finnbuick.com/" />
      </Helmet>
      <Intro />
      <Background />
      <Projects />
      <Footer />
    </Layout>
  )
}
