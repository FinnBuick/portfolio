import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

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
      </Helmet>

      <header className="intro">
        {/* <h4>Hey, my name is</h4> */}
        <h1 className="intro__hello">Hi, I'm Finn Buick</h1>
        <h2 className="intro__tagline">
          I'm a software engineer, based in Sydney. <br />I like to learn, solve
          problems and build useful things.
        </h2>
        <h3 className="intro__contact">
          Get in touch{" "}
          <span className="sm-view" role="img">
            👇
          </span>
          <span className="lg-view" role="img">
            👉
          </span>{" "}
          <a href="mailto:finnbuick@gmail.com">finnbuick@gmail.com</a>
        </h3>
      </header>

      <section className="section background">
        <div className="section__title">Background</div>
        <div className="section__content">
          <p>
            I'm a fourth year software engineering student at Macquarie
            University. I like to build things for the web.
          </p>
        </div>
        <p>Here are a few technologies I have experience with:</p>
        <div className="skills">
          <div className="skills__category">
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>HTML & CSS</li>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skills__category">
            <ul>
              <li>React</li>
              <li>Material-UI</li>
              <li>Firebase</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section projects">
        <div>Projects</div>
      </section>

      <section className="section contact">
        <div>Contact</div>
        <div className="socialLinks">
          <img id="social_img" src="images/headshot.jpg" alt="" />
          <a href="#" target="_blank">
            LinkedIn
          </a>
          <a href="#" target="_blank">
            Github
          </a>
          <a href="Resume.pdf" target="_blank">
            Download Resume
          </a>
        </div>
      </section>
    </Layout>
  )
}
