import React from "react";
import OwlCarousel from "react-owl-carousel";

import i1 from "../../assets/images/post-classic-1-370x255.jpg";
import i2 from "../../assets/images/post-classic-5-370x255.jpg";
import i3 from "../../assets/images/post-classic-4-370x255.jpg";

const options = {
  loop: true,
  autoplay: false,
  dots: false,
  nav: true,
  items: 2,
  navText: [
    "<div class='owl-prev'><i class='fa fa-angle-left'></i></div>",
    "<div class='owl-next'><i class='fa fa-angle-right'></i></div>",
  ],
};

class LatestNews extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-white">
        <div className="container">
          <div className="wow fadeInDown">
            <h3 className="text-center">Latest News</h3>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                // className="owl-carousel"
                data-items={1}
                data-md-items={2}
                data-lg-items={3}
                data-dots="true"
                data-nav="false"
                data-stage-padding={15}
                data-loop="false"
                data-margin={30}
                data-mouse-drag="false"
              >
                <OwlCarousel
                className="owl-carousel"
                  {...options}
                >
                  <div className="wow slideInDown">
                    <div className="post-classic">
                      <div className="post-classic-figure">
                        <a href="blog-post.html">
                          <img src={i1} alt width={370} height={255} />
                        </a>
                      </div>
                      <div className="post-classic-caption">
                        <h4 className="post-classic-title">
                          <a href="blog-post.html">
                            Top 10 Archery Skills and Techniques to Master
                          </a>
                        </h4>
                        <ul className="post-classic-meta">
                          <li>April 25, 2019</li>
                          <li>
                            <a className="post-classic-tag" href="#">
                              News
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="wow slideInDown">
                    <div className="post-classic">
                      <div className="post-classic-figure">
                        <a href="blog-post.html">
                          <img src={i2} alt width={370} height={255} />
                        </a>
                      </div>
                      <div className="post-classic-caption">
                        <h4 className="post-classic-title">
                          <a href="blog-post.html">
                            Improving Accuracy During Your Archery Training
                          </a>
                        </h4>
                        <ul className="post-classic-meta">
                          <li>April 25, 2019</li>
                          <li>
                            <a className="post-classic-tag" href="#">
                              News
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="wow slideInDown">
                    <div className="post-classic">
                      <div className="post-classic-figure">
                        <a href="blog-post.html">
                          <img src={i3} alt width={370} height={255} />
                        </a>
                      </div>
                      <div className="post-classic-caption">
                        <h4 className="post-classic-title">
                          <a href="blog-post.html">
                            The Complete Guide to Modern Archery
                          </a>
                        </h4>
                        <ul className="post-classic-meta">
                          <li>April 25, 2019</li>
                          <li>
                            <a className="post-classic-tag" href="#">
                              News
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestNews;
