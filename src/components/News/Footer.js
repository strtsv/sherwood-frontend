import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic context-dark">
        <div className="container">
          <div className="row row-50">
            <div className="col-lg-4 order-lg-1 pr-xl-5 wow-outer">
              <div className="wow slideInLeft">
                <div className="row row-30">
                  <div className="col-12">
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
                  <div className="col-12">
                    <p className="subtitle">
                      Sherwood Archery Club is a friendly and welcoming
                      traditional only archery club. We welcome archers of all
                      ages and abilities to our sport while concentrating on all
                      types of traditional archery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-lg-2 pl-xl-5 wow-outer">
              <div className="wow slideInRight">
                <div className="row row-50">
                  <div className="col-md-3 col-xl-2 order-lg-2 text-lg-center wow-outer">
                    <div className="wow slideInLeft" />
                    <h5 className="footer-title footer-offset">share</h5>
                    <ul className="social-list footer-list">
                      <li>
                        <a
                          className="icon icon-sm icon-circle icon-circle-sm icon-bg-white fa-facebook"
                          href="#"
                        />
                      </li>
                      <li>
                        <a
                          className="icon icon-sm icon-circle icon-circle-sm icon-bg-white fa-instagram"
                          href="#"
                        />
                      </li>
                      <li>
                        <a
                          className="icon icon-sm icon-circle icon-circle-sm icon-bg-white fa-twitter"
                          href="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9 col-xl-10 order-lg-1 wow-outer">
                    <div className="wow slideInRight">
                      <h6 className="footer-title">Address & Phone</h6>
                      <p className="subtitle">
                        51 Francis Street, Darlinghurst NSW 2010, United States
                      </p>
                      <span className="subtitle">Ph.</span>
                      <a className="subtitle" href="tel:#">
                        {" "}
                        +1-800-123-1234
                      </a>
                      <div className="mt-5">
                        <form
                          className="rd-form rd-mailform rd-form-inline"
                          data-form-output="form-output-global"
                          data-form-type="subscribe"
                          method="post"
                          action="bat/rd-mailform.php"
                        >
                          <div className="footer-form form-wrap">
                            <input
                              className="form-input"
                              id="subscribe-form-email"
                              type="email"
                              name="email"
                              data-constraints="@Email @Required"
                            />
                            <label
                              className="form-label"
                              htmlFor="subscribe-form-email"
                            >
                              E-mail
                            </label>
                          </div>
                          <div className="footer-btn form-button group-sm text-center text-lg-left">
                            <button
                              className="button button-lg button-secondary"
                              type="submit"
                            >
                              subscribe
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <p className="rights footer-rights">
                      <span>© </span>
                      <span className="copyright-year" />
                      <span> </span>
                      <span>Sherwood</span>
                      <span>. All Rights Reserved.</span>
                      <span> </span>
                      <span>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
