import React from "react"

const Intro = () => {
  return (
    <header className="intro">
      <h1 className="intro__hello">Hi, I'm Finn Buick</h1>
      <h2 className="intro__tagline">
        I'm a software engineer, based in Sydney. <br />I like to learn, solve
        problems and build useful things.
      </h2>
      <h3 className="intro__contact">
        Get in touch{" "}
        <span className="sm-view" role="img" aria-label="emoji">
          👇
        </span>
        <span className="lg-view" role="img" aria-label="emoji">
          👉
        </span>{" "}
        <a className="link" href="mailto:finnbuick@gmail.com">
          finnbuick@gmail.com
        </a>
      </h3>
    </header>
  )
}

export default Intro
