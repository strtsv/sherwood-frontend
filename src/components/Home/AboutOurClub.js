import React from "react";

import i1 from "../../assets/images/user-1-129x152.jpg";
import i2 from "../../assets/images/home-1-640x394.jpg";

class AboutOurClub extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-default">
        <div className="container">
          <div className="row row-50">
            <div className="col-lg-6 wow-outer">
              <div className="wow slideInLeft">
                <div className="text-with-divider">
                  <div className="divider" />
                  <h3>About our club</h3>
                </div>
                <div className="row row-30">
                  <div className="col-sm-4 col-lg-3">
                    <div className="box-user-classic">
                      <img src={i1} alt width={129} height={152} />
                      <h5 className="custom-title">
                        <a href="team-member-page.html">John Parker</a>
                      </h5>
                      <div className="subtitle-2">Founder</div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <p className="subtitle-1">
                      Sherwood was founded by John Parker in 1999 with the goal
                      of enjoying the great sport of archery year round. We also
                      offer quality archery training for everyone.
                    </p>
                    <a
                      className="button button-default-outline button-lg"
                      href="about-us.html"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow-outer">
              <img
                className="wow slideInRight auto-height"
                src={i2}
                alt
                width={640}
                height={394}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutOurClub;
