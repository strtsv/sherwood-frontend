import React from "react";

import i1 from "../../assets/images/course-01-340x196.jpg";
import i2 from "../../assets/images/course-02-340x196.jpg";
import i3 from "../../assets/images/course-03-340x196.jpg";

class OurCourses extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray double-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>Our Courses</h3>
            </div>
          </div>
          <div className="row row-50 align-items-lg-center">
            <div className="col-lg-4 wow-outer">
              <div className="wow slideInLeft">
                <div className="box-pricing-modern">
                  <img
                    className="wow slideInRight position-relative"
                    src={i1}
                    alt
                    width={340}
                    height={196}
                  />
                  <h4 className="pricing-modern-title wow slideInRight">
                    Beginners
                  </h4>
                  <div className="box-pricing-modern-inner">
                    <span />
                    <ul className="list-marked pricing-modern-list">
                      <li>5 lessons</li>
                      <li>Equipment rental</li>
                      <li>Part-day</li>
                      <li>Min age - 15 years old</li>
                      <li>Accredited coach</li>
                    </ul>
                    <div className="pricing-modern-price">
                      <span>$35\mo</span>
                    </div>
                    <a className="button button-lg button-secondary" href="#">
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow-outer">
              <div className="wow slideInUp">
                <div className="box-pricing-modern">
                  <img
                    className="wow slideInRight position-relative"
                    src={i2}
                    alt
                    width={340}
                    height={196}
                  />
                  <h4 className="pricing-modern-title wow slideInRight">
                    Beginners
                  </h4>
                  <div className="box-pricing-modern-inner">
                    <span />
                    <ul className="list-marked pricing-modern-list">
                      <li>8 lessons</li>
                      <li>Equipment & catering</li>
                      <li>Part-day & full-day</li>
                      <li>Min age - 18 years old</li>
                      <li>Group lessons only</li>
                    </ul>
                    <div className="pricing-modern-price">
                      <span>$55\mo</span>
                    </div>
                    <a className="button button-lg button-secondary" href="#">
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow-outer">
              <div className="wow slideInRight">
                <div className="box-pricing-modern">
                  <img
                    className="wow slideInRight position-relative"
                    src={i3}
                    alt
                    width={340}
                    height={196}
                  />
                  <h4 className="pricing-modern-title wow slideInRight">
                    Children
                  </h4>
                  <div className="box-pricing-modern-inner">
                    <span />
                    <ul className="list-marked pricing-modern-list">
                      <li>10 lessons</li>
                      <li>Free equipment</li>
                      <li>Full-day</li>
                      <li>Min age - 6 years old</li>
                      <li>Individual lessons</li>
                    </ul>
                    <div className="pricing-modern-price">
                      <span>$45\mo</span>
                    </div>
                    <a className="button button-lg button-secondary" href="#">
                      Book now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurCourses;
