import React from "react"

const Intro = () => {
  return (
    <header className="intro">
      <div className="blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#007BFF"
            d="M58.1,-47.6C67.3,-34.8,61.3,-11.1,52.5,5.8C43.8,22.7,32.2,32.7,21.7,33.3C11.2,33.8,1.7,24.9,-12.3,20.2C-26.3,15.4,-44.9,15,-54.5,3.6C-64.1,-7.7,-64.8,-30,-54.2,-43.1C-43.6,-56.3,-21.8,-60.3,1.3,-61.4C24.4,-62.5,48.9,-60.5,58.1,-47.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <h1 className="intro__hello">Hey, I'm Finn Buick</h1>
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
