import React from "react";
import $ from "jquery";
import Slider from "react-slick";

import i1 from "../../assets/images/user-1-60x60.jpg";
import i2 from "../../assets/images/user-2-60x60.jpg";
import i3 from "../../assets/images/user-3-60x60.jpg";
import i4 from "../../assets/images/user-4-60x60.jpg";

class Testimonials extends React.Component {
  render() {
    var settings = {
      slidesToShow: 4,
      slidesToScroll:
        parseInt($(".slick-slider").attr("data-slide-to-scroll"), 10) || 1,
      asNavFor: $(".slick-slider").attr("data-for") || false,
      dots: $(".slick-slider").attr("data-dots") === "true",
      infinite: false ? false : $(".slick-slider").attr("data-loop") === "true",
      focusOnSelect: true,
      arrows: $(".slick-slider").attr("data-arrows") === "true",
      swipe: $(".slick-slider").attr("data-swipe") === "true",
      autoplay: $(".slick-slider").attr("data-autoplay") === "true",
      vertical: $(".slick-slider").attr("data-vertical") === "true",
      centerMode: $(".slick-slider").attr("data-center-mode") === "true",
      variableWidth: $(".slick-slider").attr("data-auto-width") === "true",
      centerPadding: $(".slick-slider").attr("data-center-padding")
        ? $(".slick-slider").attr("data-center-padding")
        : "0.50",
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-items"), 10) || 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-sm-items"), 10) || 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-md-items"), 10) || 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-lg-items"), 10) || 1,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow:
              parseInt($(".slick-slider").attr("data-xl-items"), 10) || 1,
          },
        },
      ],
    };
    return (
      <section className="section section-lg bg-gray-1 text-center">
        <div className="container wow fadeInUp">
          <div className="wow-outer">
            <h3>Testimonials</h3>
          </div>
          <div
            className="slick-slider carousel-parent"
            data-arrows="true"
            data-loop="false"
            data-dots="false"
            data-swipe="true"
            data-items={1}
            data-child="#child-carousel"
            data-for="#child-carousel"
          >
            <Slider
              className="slick-slider carousel-parent"
              data-arrows="true"
              data-loop="false"
              data-dots="false"
              data-swipe="true"
              data-items={4}
              data-child="#child-carousel"
              data-for="#child-carousel"
              {...settings}
            >
              <div className="item">
                <div className="testimonials-modern">
                  <div className="testimonials-modern-text">
                    <p>
                      Me and my husband had a wonderful time learning the
                      fundamentals with your coach. We were much more
                      comfortable and confident shooting by the end of the
                      lesson and ended up signing up for the full five-week
                      course afterward.
                    </p>
                  </div>
                  <div className="testimonials-modern-name">Joanna Smith</div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-modern">
                  <div className="testimonials-modern-text">
                    <p>
                      I had a wonderful time during my last session! Will was
                      full of knowledge and patience. I’ll definitely be going
                      back for another training session. I am also going to
                      recommend this archery club to all my friends.
                    </p>
                  </div>
                  <div className="testimonials-modern-name">James Williams</div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-modern">
                  <div className="testimonials-modern-text">
                    <p>
                      I regularly visit Sherwood Archery Club to take a break
                      from work routine and get a memorable archery experience.
                      I’m not a pro in this sport, so when I need assistance
                      their staff is always ready to help me, which is great.
                    </p>
                  </div>
                  <div className="testimonials-modern-name">Kate McMillan</div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-modern">
                  <div className="testimonials-modern-text">
                    <p>
                      You provided me and my family with one of the best archery
                      experiences we’ve ever had! Thank you for offering us your
                      club’s archery equipment, it really helped us. Your
                      coaches also proved to be very knowledgeable.
                    </p>
                  </div>
                  <div className="testimonials-modern-name">Peter Wilson</div>
                </div>
              </div>
            </Slider>
          </div>
          <div
            className="slick-slider slider-dots"
            id="child-carousel"
            data-for=".carousel-parent"
            data-arrows="false"
            data-loop="false"
            data-dots="false"
            data-swipe="true"
            data-items={4}
            data-xs-items={4}
            data-sm-items={4}
            data-md-items={4}
            data-lg-items={4}
            data-xl-items={4}
            data-slide-to-scroll={1}
          >
            <Slider
              className="slick-slider slider-dots"
              id="child-carousel"
              data-for=".carousel-parent"
              data-arrows="false"
              data-loop="false"
              data-dots="false"
              data-swipe="true"
              data-items={4}
              data-xs-items={4}
              data-sm-items={4}
              data-md-items={4}
              data-lg-items={4}
              data-xl-items={4}
              data-slide-to-scroll={1}
              {...settings}
            >
              <div className="item">
                <div className="slick-dot-item">
                  <img src={i1} alt width={60} height={60} />
                </div>
              </div>
              <div className="item">
                <div className="slick-dot-item">
                  <img src={i2} alt width={60} height={60} />
                </div>
              </div>
              <div className="item">
                <div className="slick-dot-item">
                  <img src={i3} alt width={60} height={60} />
                </div>
              </div>
              <div className="item">
                <div className="slick-dot-item">
                  <img src={i4} alt width={60} height={60} />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
