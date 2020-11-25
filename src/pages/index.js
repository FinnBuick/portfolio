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
          <div className="greeting-wrapper">
            {/* <h4>Hey, my name is</h4> */}
            <h1>Hi, I'm Finn Buick</h1>
            <h4>
              I'm a software engineer, based in Sydney. I like to learn, solve
              problems and build useful things.
            </h4>
            <p>
              Get in touch{" "}
              <span className="emoji technologist" role="img">
                👉
              </span>{" "}
              <a href="mailto:finnbuick@gmail.com">finnbuick@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="about-wrapper">
          <div className="about-me">
            <div className="main-container">
              <h3>About Me</h3>
              <p>
                I'm a fourth year software engineering student at Macquarie
                University. I like to build things for the web.
              </p>
              <a href="Resume.pdf" target="_blank">
                Download Resume
              </a>
              <p>Here are a few technologies I've have experience with:</p>
              <div id="skills">
                <ul>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>HTML & CSS</li>
                </ul>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="social-links">
            {/* <img id="social_img" src="images/headshot.jpg" alt="" /> */}
            <a href="#" target="_blank">
              LinkedIn
            </a>
            <a href="#" target="_blank">
              Github
            </a>
          </div>
        </div>
      </section>

      <section className="s1">
        <div className="main-container">Portfolio</div>
      </section>

      <section className="s2">
        <div className="main-container">Contact</div>
      </section>
    </Layout>
  )
}
