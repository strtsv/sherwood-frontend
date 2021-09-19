import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section page-header bg-white context-light">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle context-light"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand context-light">
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src="images/logo-default-358x76.png"
                        alt
                        width={179}
                        height={38}
                      />
                      <img
                        className="brand-logo-light"
                        src="images/logo-inverse-358x76.png"
                        alt
                        width={179}
                        height={38}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Pages
                        </a>
                        <ul className="rd-menu rd-navbar-megamenu">
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">Pages 1</h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="timers-&-counters.html"
                                >
                                  Timers & Counters
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="forms.html"
                                >
                                  Forms
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">Pages 2</h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="grid-system.html"
                                >
                                  Grid system
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="icon-lists.html"
                                >
                                  Icon Lists
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="privacy-policy.html"
                                >
                                  Privacy policy
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="coming-soon.html"
                                >
                                  Coming Soon
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="search-results.html"
                                >
                                  Search results
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-megamenu-item">
                            <h6 className="rd-megamenu-title">Pages 3</h6>
                            <ul className="rd-megamenu-list">
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="about-us.html"
                                >
                                  About Us
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="team.html"
                                >
                                  Team
                                </a>
                              </li>
                              <li className="rd-megamenu-list-item">
                                <a
                                  className="rd-megamenu-list-link"
                                  href="team-member-page.html"
                                >
                                  Team Member Page
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Classes
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="classes-1.html"
                            >
                              Classes 1
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="classes-2.html"
                            >
                              Classes 2
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="class-page.html"
                            >
                              Class Page
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="#">
                          News
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="news-1.html">
                              News 1
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="news-2.html">
                              News 2
                            </a>
                          </li>
                          <li className="rd-dropdown-item active">
                            <a
                              className="rd-dropdown-link"
                              href="blog-post.html"
                            >
                              Blog Post
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                    {}
                    <a className="button button-secondary button-sm" href="#">
                      Join the club
                    </a>
                  </div>
                </div>
                <a className="button button-secondary button-sm" href="#">
                  Join the club
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
