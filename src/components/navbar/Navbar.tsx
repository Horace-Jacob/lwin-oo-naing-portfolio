import React from "react";

interface INavbar {}

export const Navbar: React.FC<INavbar> = () => {
  const openMenu = () => {
    document.body.classList.add("is-nav-open");
  };

  const closeMenu = () => {
    document.body.classList.remove("is-nav-open");
  };
  return (
    <>
      <div className="header-bg"></div>
      <div className="header-container">
        <div className="header-breadcrumb title-inline">me.is()</div>
        <button
          title="Open menu"
          type="button"
          className="header-nav-button"
          onClick={openMenu}
        >
          <span className="label">Menu</span>

          <span className="dots d1"></span>
          <span className="dots d2"></span>
          <span className="dots d3"></span>
        </button>
        <nav className="header-nav">
          <button
            title="Close menu"
            type="button"
            className="header-nav-close-button"
            onClick={closeMenu}
          >
            <span className="label">✕</span>
          </button>
          <ul>
            <li>
              <a
                href="/lwin-oo-naing-portfolio"
                className="router-link-exact-active router-link-active"
                title="home"
              >
                .is()
              </a>
            </li>

            <li>
              <a
                href="LwinOoNaingResume.pdf"
                title="cv"
                download={"LwinOonaingResume.pdf"}
              >
                .cv()
              </a>
            </li>

            <li>
              <a href="mailto:lwinoonaing806@gmail.com" title="email me">
                .email()
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://www.linkedin.com/in/lwin-oo-naing/"
                title="linkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-labelledby="LinkedinIcoTitle"
                  className="ico"
                >
                  <title id="LinkedinIcoTitle">LinkedIn</title>
                  <path
                    stroke="none"
                    d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="social-link">
              <a
                href="https://github.com/Horace-Jacob"
                title="github"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  role="img"
                  aria-labelledby="GithubIcoTitle"
                  className="ico"
                >
                  <title id="GithubIcoTitle">GitHub</title>
                  <path
                    stroke="none"
                    fillRule="evenodd"
                    d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
