import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import feather from "feather-icons";

const Toggle = () => {
  return (
    <div className="switch-wrapper">
      <span
        dangerouslySetInnerHTML={{
          __html: feather.icons["sun"].toSvg(),
        }}
      ></span>
      <div className="toggle-wrapper">
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            if (theme == null) {
              return null;
            }
            return (
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />
                <span class="slider round"></span>
              </label>
            );
          }}
        </ThemeToggler>
      </div>
      <span
        dangerouslySetInnerHTML={{
          __html: feather.icons["moon"].toSvg(),
        }}
      ></span>
    </div>
  );
};

export default Toggle;
