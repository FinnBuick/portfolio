import React from "react";
import feather from "feather-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a href="mailto:finnbuick@gmail.com" target="_blank" rel="noreferrer">
          <span
            className="socials__icon"
            dangerouslySetInnerHTML={{
              __html: feather.icons["mail"].toSvg(),
            }}
          ></span>
        </a>
        <a
          href="https://www.linkedin.com/in/finn-buick/"
          target="_blank"
          rel="noreferrer"
        >
          <span
            className="socials__icon"
            dangerouslySetInnerHTML={{
              __html: feather.icons["linkedin"].toSvg(),
            }}
          ></span>
        </a>
        <a
          href="https://github.com/FinnBuick/"
          target="_blank"
          rel="noreferrer"
        >
          <span
            className="socials__icon"
            dangerouslySetInnerHTML={{
              __html: feather.icons["github"].toSvg(),
            }}
          ></span>
        </a>
      </div>
      <div className="footer__copyright">Finn Buick &copy; 2021</div>
    </div>
  );
};

export default Footer;
