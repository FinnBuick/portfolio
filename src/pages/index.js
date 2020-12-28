import React from "react"
import { Helmet } from "react-helmet"
import { Layout, Intro, Background, Projects, Footer } from "@components"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Finn Buick</title>
        <link rel="canonical" href="http://finnbuick.com/" />
        
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-508D1LDCFM"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-508D1LDCFM');
        </script>
      </Helmet>
      <Intro />
      <Background />
      <Projects />
      <Footer />
    </Layout>
  )
}
