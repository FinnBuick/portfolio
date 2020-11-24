import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Finn Buick</title>
        <link rel="canonical" href="http://finnbuick.com/" />
      </Helmet>

      <section className="s1">
        <div className="main-container">
          <h1>Hey, I'm Finn Buick.</h1>
          <p>
            I'm a budding engineer based in Sydney who likes to build things and
            learn stuffs, pls hire
          </p>
          <a href="#">Link</a>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">About</div>
      </section>

      <section className="s2">
        <div className="main-container">Portfolio</div>
      </section>

      <section className="s1">
        <div className="main-container">Contact</div>
      </section>
    </Layout>
  )
}
