import React from "react";

import i1 from "../../assets/images/post-classic-1-370x255.jpg";
import i2 from "../../assets/images/post-classic-2-370x255.jpg";
import i3 from "../../assets/images/post-classic-3-370x255.jpg";
import i4 from "../../assets/images/post-classic-4-370x255.jpg";
import i5 from "../../assets/images/post-classic-5-370x255.jpg";
import i6 from "../../assets/images/post-classic-6-370x255.jpg";

class NewsItem extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="row row-70 justify-content-xl-between">
            <div className="col-lg-8">
              <div className="row row-50 justify-content-center">
                <div className="col-md-6">
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
                          <a
                            className="post-classic-tag-secondary post-classic-tag"
                            href="#"
                          >
                            News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-classic">
                    <div className="post-classic-figure">
                      <a href="blog-post.html">
                        <img src={i2} alt width={370} height={255} />
                      </a>
                    </div>
                    <div className="post-classic-caption">
                      <h4 className="post-classic-title">
                        <a href="blog-post.html">
                          What Does "Overbowed" Mean in Archery?
                        </a>
                      </h4>
                      <ul className="post-classic-meta">
                        <li>April 25, 2019</li>
                        <li>
                          <a
                            className="post-classic-tag-secondary post-classic-tag"
                            href="#"
                          >
                            News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-classic">
                    <div className="post-classic-figure">
                      <a href="blog-post.html">
                        <img src={i3} alt width={370} height={255} />
                      </a>
                    </div>
                    <div className="post-classic-caption">
                      <h4 className="post-classic-title">
                        <a href="blog-post.html">
                          Fitness Guide to Archery for Beginners
                        </a>
                      </h4>
                      <ul className="post-classic-meta">
                        <li>April 25, 2019</li>
                        <li>
                          <a
                            className="post-classic-tag-secondary post-classic-tag"
                            href="#"
                          >
                            News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-classic">
                    <div className="post-classic-figure">
                      <a href="blog-post.html">
                        <img src={i4} alt width={370} height={255} />
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
                <div className="col-md-6">
                  <div className="post-classic">
                    <div className="post-classic-figure">
                      <a href="blog-post.html">
                        <img src={i5} alt width={370} height={255} />
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
                          <a
                            className="post-classic-tag-secondary-2 post-classic-tag"
                            href="#"
                          >
                            News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-classic">
                    <div className="post-classic-figure">
                      <a href="blog-post.html">
                        <img src={i6} alt width={370} height={255} />
                      </a>
                    </div>
                    <div className="post-classic-caption">
                      <h4 className="post-classic-title">
                        <a href="blog-post.html">
                          The Difference Between Longbow and Recurve Bow
                        </a>
                      </h4>
                      <ul className="post-classic-meta">
                        <li>April 25, 2019</li>
                        <li>
                          <a
                            className="post-classic-tag-secondary post-classic-tag"
                            href="#"
                          >
                            News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {}
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-classic">
                    <li className="page-item page-item-control disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span className="icon" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item page-item-control">
                      <a className="page-link" href="#" aria-label="Next">
                        <span className="icon" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="block-aside">
                <div className="block-aside-item">
                  <h5 className="block-aside-title">Categories</h5>
                  <ul className="category-list">
                    <li className="active">
                      <a href="#">
                        All Categories<span>12</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Archery<span>3</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Equipment<span>4</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        News<span>6</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tips<span>2</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="block-aside-item">
                  <h5 className="block-aside-title">Search News</h5>
                  {}
                  <form
                    className="rd-search form-sm"
                    action="search-results.html"
                    method="GET"
                    data-search-live="rd-search-results-live"
                  >
                    <div className="form-wrap">
                      <label
                        className="form-label"
                        htmlFor="rd-search-form-input"
                      >
                        Search
                      </label>
                      <input
                        className="form-input"
                        id="rd-search-form-input"
                        type="text"
                        name="s"
                        autoComplete="off"
                      />
                      <button
                        className="button-search icon linearicons-magnifier"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
                <div className="block-aside-item">
                  <h5 className="block-aside-title">Latest News</h5>
                  <div className="post-minimal">
                    <h5 className="post-minimal-title">
                      <a href="blog-post.html">
                        Comfortable Finger Protection – Tab or Glove?
                      </a>
                    </h5>
                    <p className="post-minimal-date">April 25, 2019</p>
                  </div>
                  <div className="post-minimal">
                    <h5 className="post-minimal-title">
                      <a href="blog-post.html">
                        Archery Equipment for Youth: What to Choose?
                      </a>
                    </h5>
                    <p className="post-minimal-date">April 25, 2019</p>
                  </div>
                </div>
                <div className="block-aside-item">
                  <h5 className="block-aside-title">Newsletter</h5>
                  {}
                  <form
                    className="rd-mailform text-left form-sm"
                    data-form-output="form-output-global"
                    data-form-type="contact"
                    method="post"
                    action="bat/rd-mailform.php"
                  >
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="contact-email">
                        Enter Your E-mail
                      </label>
                      <input
                        className="form-input"
                        id="contact-email"
                        type="email"
                        name="email"
                        data-constraints="@Email @Required"
                      />
                    </div>
                    <div className="form-button">
                      <button
                        className="button button-block button-secondary"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsItem;
