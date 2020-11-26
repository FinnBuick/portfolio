import React from "react"

const Background = () => {
  return (
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
            <li>Gatsby</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Background
