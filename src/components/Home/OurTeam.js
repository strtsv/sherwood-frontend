import React from "react";

import i1 from "../../assets/images/team-01-372x396.jpg";
import i2 from "../../assets/images/team-02-372x396.jpg";
import i3 from "../../assets/images/team-03-372x396.jpg";

class OurTeam extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray double-gray">
        <div className="container">
          <h3 className="text-center font-weight-medium wow fadeIn">
            Our Team
          </h3>
          <p className="subtitle text-center wow fadeIn">
            The team at Sherwood consists of the most experienced coaches{" "}
            <br className="d-none d-md-block" /> who are passionate not only
            about archery but about teaching as well.
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-4 wow slideInLeft">
              <div className="team-minimal">
                <div className="team-minimal-figure">
                  <img src={i1} alt width={372} height={396} />
                  <ul className="team-minimal-soc-list">
                    <li>
                      <a className="icon icon-lg fa-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-twitter" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="team-minimal-caption">
                  <h4>
                    <a className="team-name" href="team-member-page.html">
                      Peter Smith
                    </a>
                  </h4>
                  <p>Head coach, co-founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="wow fadeInUp">
                <div className="team-minimal">
                  <div className="team-minimal-figure">
                    <img src={i2} alt width={372} height={396} />
                    <ul className="team-minimal-soc-list">
                      <li>
                        <a className="icon icon-lg fa-facebook" href="#" />
                      </li>
                      <li>
                        <a className="icon icon-lg fa-instagram" href="#" />
                      </li>
                      <li>
                        <a className="icon icon-lg fa-twitter" href="#" />
                      </li>
                    </ul>
                  </div>
                  <div className="team-minimal-caption">
                    <h4>
                      <a className="team-name" href="team-member-page.html">
                        Edward Wilson
                      </a>
                    </h4>
                    <p>Child coach</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow slideInRight last-team">
              <div className="team-minimal">
                <div className="team-minimal-figure">
                  <img src={i3} alt width={372} height={396} />
                  <ul className="team-minimal-soc-list">
                    <li>
                      <a className="icon icon-lg fa-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon icon-lg fa-twitter" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="team-minimal-caption">
                  <h4>
                    <a className="team-name" href="team-member-page.html">
                      Will Jackson
                    </a>
                  </h4>
                  <p>Adult coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTeam;
