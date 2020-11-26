import React from "react"

const Intro = () => {
  return (
    <header className="intro">
      <h1 className="intro__hello">Hey, I'm Finn Buick</h1>
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
  )
}

export default Intro
