import React from "react";
import feather from "feather-icons";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="section__title">Projects </div>
      <div className="section__content">
        <div className="project">
          <div className="project__title">
            <a
              className="left"
              href="https://service-barter-comp4050.firebaseapp.com/"
            >
              Help.me
            </a>
            <span
              className="icon arrow"
              dangerouslySetInnerHTML={{
                __html: feather.icons["arrow-right"].toSvg(),
              }}
            ></span>
          </div>
          <div className="project__description">
            An online local marketplace where users can carry out favours for
            others in exchange for favour points, as well as request favours
            themselves.
          </div>
          <div className="project__used">
            <span className="project__used__item">Typescript</span>
            <span className="project__used__item">React</span>
            <span className="project__used__item">Firebase</span>
            <span className="project__used__item">
              Firebase Cloud Functions
            </span>
            <span className="project__used__item">
              Firebase Cloud Messaging
            </span>
            <span className="project__used__item">React-Router</span>
            <span className="project__used__item">Material-UI</span>
          </div>
        </div>
        <div className="project">
          <div className="project__title">
            <a className="left" href="https://spotify-favourites.herokuapp.com">
              Spotify Favourites
            </a>
            <span
              className="icon arrow"
              dangerouslySetInnerHTML={{
                __html: feather.icons["arrow-right"].toSvg(),
              }}
            ></span>
          </div>
          <div className="project__description">
            A personal project that uses the Spotify Web API, React and Express
            to present users with a list of their most listened to songs on
            Spotify.
          </div>
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
            <a className="left" href="https://github.com/FinnBuick/COMP434-CPD">
              Computer Vision Finger Counter
            </a>
            <span
              className="icon arrow"
              dangerouslySetInnerHTML={{
                __html: feather.icons["arrow-right"].toSvg(),
              }}
            ></span>
          </div>
          <div className="project__description">
            A 4th year project that could identify the number of fingers a
            person was holding up in a video stream using computer vision
            techniques.
          </div>
          <div className="project__used">
            <span className="project__used__item">Python</span>
            <span className="project__used__item">OpenCV</span>
            <span className="project__used__item">Matplotlib</span>
            <span className="project__used__item">Numpy</span>
          </div>
        </div>
        <div className="project">
          <div className="project__title">
            <a
              className="left"
              href="https://github.com/FinnBuick/CafeShenkin-iOS-Loyalty-App"
            >
              Café Shenkin Loyalty Rewards App
            </a>
            <span
              className="icon arrow"
              dangerouslySetInnerHTML={{
                __html: feather.icons["arrow-right"].toSvg(),
              }}
            ></span>
          </div>
          <div className="project__description">
            A group project in collaboration with sydney based Café Shenkin to
            develop an iOS app to track customer purchases using generated QR
            codes, rewarding users with deals & discounts. Written in Swift
            using Firebase Cloud Firestore & Authentication.
          </div>
          <div className="project__used">
            <span className="project__used__item">Swift</span>
            <span className="project__used__item">UIKit</span>
            <span className="project__used__item">Firebase</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
