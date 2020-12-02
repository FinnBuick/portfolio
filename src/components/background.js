import React from "react"
import feather from "feather-icons"

const Background = () => {
  return (
    <section className="section background">
      <div className="section__title">Background</div>
      <div className="section__content">
        <p>
          I'm a fourth year software engineering student at Macquarie
          University. I like to build things for the web.
        </p>
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
              <li>Gatsby</li>
            </ul>
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
          </div>
          <a
            className="project__title resume"
            href="Resume.pdf"
            target="_blank"
          >
            View my resume
            <span
              className="icon arrow"
              dangerouslySetInnerHTML={{
                __html: feather.icons["arrow-right"].toSvg(),
              }}
            ></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Background
