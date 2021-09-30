import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/swiper-slide-1.jpg";
import i2 from "../../assets/images/swiper-slide-2.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      speed: 1000,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
      },
    });
  }
  render() {
    return (
      <section
        className="section swiper-container swiper-slider swiper-slider-1"
        data-loop="false"
        data-autoplay={5000}
        data-simulate-touch="false"
      >
        <div className="swiper-wrapper">
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i1}
            style={{
              backgroundImage: "url(" + i1 + ")",
            }}
          >
            <div className="swiper-slide-caption section-lg">
              <div className="container">
                <div className="row flex-column align-items-end row-15">
                  <div className="col-xl-5 text-right">
                    <div className="text-accent-3">Quality</div>
                    <div className="text-accent-2">
                      <span
                        data-caption-animate="fadeInLeft"
                        data-caption-delay={250}
                      >
                        archery <strong>courses</strong>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="text-accent-1">
                      <p>
                        <span
                          data-caption-animate="fadeInLeft"
                          data-caption-delay={150}
                        >
                          At Sherwood archery club, you can always get quality
                          archery training by our professional coaches.
                        </span>
                      </p>
                    </div>
                    <div
                      className="button-wrap"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={450}
                    >
                      <a
                        className="button button-lg button-moz button-white-outline"
                        href="#"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i1}
            style={{
              backgroundImage: "url(" + i2 + ")",
            }}
            style={{
              backgroundPosition: "50% 50%",
            }}
          >
            <div className="swiper-slide-caption section-lg">
              <div className="container">
                <div className="row flex-column align-items-end row-15">
                  <div className="col-xl-5 text-right">
                    <div className="text-accent-3">Archery</div>
                    <div className="text-accent-2">
                      <span
                        data-caption-animate="fadeInLeft"
                        data-caption-delay={250}
                      >
                        for <strong>everyone</strong>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="text-accent-1">
                      <p>
                        <span
                          data-caption-animate="fadeInLeft"
                          data-caption-delay={150}
                        >
                          Welcome to Sherwood, America’s premier indoor and
                          outdoor archery venue open to everyone.
                        </span>
                      </p>
                    </div>
                    <div
                      className="button-wrap"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={450}
                    >
                      <a
                        className="button button-lg button-moz button-white-outline"
                        href="#"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination" />
        {}
        <div className="swiper-button-prev fa-arrow-left" />
        <div className="swiper-button-next fa-arrow-right" />
      </section>
    );
  }
}

export default Slider;
