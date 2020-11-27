import React from "react"
import feather from "feather-icons"

const Projects = () => {
  return (
    <section className="section projects">
      <div className="section__title">Projects </div>
      <div className="section__content">
        <div className="project">
          <div className="project__title">
            <a href="https://spotify-favourites.herokuapp.com">
              Help.me
              <span
                className="icon arrow"
                dangerouslySetInnerHTML={{
                  __html: feather.icons["arrow-right"].toSvg(),
                }}
              ></span>
            </a>
          </div>
          <p>
            An online local marketplace where users can carry out favours for
            others in exchange for favour points, as well as request favours
            themselves.
          </p>
          <div className="project__used">
            <span className="project__used__item">Typescript</span>
            <span className="project__used__item">React</span>
            <span className="project__used__item">Firebase</span>
            <span className="project__used__item">React-Router</span>
            <span className="project__used__item">Material-UI</span>
          </div>
        </div>
        <div className="project">
          <div className="project__title">
            <a href="https://spotify-favourites.herokuapp.com">
              Spotify Favourites
              <span
                className="icon arrow"
                dangerouslySetInnerHTML={{
                  __html: feather.icons["arrow-right"].toSvg(),
                }}
              ></span>
            </a>
          </div>
          <p>
            A personal project that uses the Spotify Web API, React and Express
            to present users with a list of their most listened to songs on
            Spotify.
          </p>
          <div className="project__used">
            <span className="project__used__item">React</span>
            <span className="project__used__item">React-Router</span>
            <span className="project__used__item">Express</span>
            <span className="project__used__item">Spotify Web API</span>
            <span className="project__used__item">Heroku</span>
          </div>
        </div>
        <div className="project">
          <div className="project__title">
            <a href="https://spotify-favourites.herokuapp.com">
              Computer Vision Finger Counter
              <span
                className="icon arrow"
                dangerouslySetInnerHTML={{
                  __html: feather.icons["arrow-right"].toSvg(),
                }}
              ></span>
            </a>
          </div>
          <p>
            A 4th year project that could identify the number of fingers a
            person was holding up in a video stream using computer vision
            techniques.
          </p>
          <div className="project__used">
            <span className="project__used__item">Python</span>
            <span className="project__used__item">OpenCV</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
