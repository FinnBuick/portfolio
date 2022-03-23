import React from "react"
import feather from "feather-icons"

const Background = () => {
  return (
    <section className="section background">
      <div className="section__title">Background</div>
      <div className="section__content">
        <p>
          I'm a software engineer with a passion for building things that
          positively impact peoples lives. I'm currently working at{" "}
          {<a href="https://www.upstreet.co/">Upstreet</a>}, a Sydney-based
          startup that helps people build a share portfolio while shopping
          online.
        </p>
        <br />
        <p>My skill set includes:</p>
        <div className="skills">
          <div className="skills__category">
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>HTML & CSS</li>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
              <li>GCP (Functions, Build, Run, Storage)</li>
            </ul>
          </div>
          <div className="skills__category">
            <ul>
              <li>React</li>
              <li>Webpack</li>
              <li>Material-UI</li>
              <li>Firebase</li>
              <li>Express</li>
              <li>Gatsby</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
        <p>I also have knowledge of these:</p>
        <div className="knowledge">
          <ul>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Design Patterns</li>
            <li>Web Development</li>
            <li>Systems Programming</li>
            <li>Software Engineering Practices</li>
          </ul>
          <a
            className="project__title resume left"
            href="FinnBuickResume.pdf"
            target="_blank"
          >
            View my resume
          </a>
          <span
            className="icon arrow"
            dangerouslySetInnerHTML={{
              __html: feather.icons["arrow-right"].toSvg(),
            }}
          ></span>
        </div>
      </div>
    </section>
  )
}

export default Background
