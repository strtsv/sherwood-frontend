import React from "react";

import i1 from "../../assets/images/blog-post-1-518x569.jpg";
import i2 from "../../assets/images/blog-post-2-1170x456.jpg";
import i3 from "../../assets/images/blog-post-3-398x283.jpg";
import i4 from "../../assets/images/blog-post-4-398x283.jpg";

class News extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="row row-50 justify-content-lg-between">
            <div className="col-lg-6">
              <ul className="blog-post-meta">
                <li>
                  <a className="badge" href="#">
                    News
                  </a>
                </li>
                <li>
                  <span className="icon mdi mdi-clock" />
                  May 11, 2019
                </li>
                <li>
                  <span className="icon mdi mdi-eye" />
                  345 views
                </li>
              </ul>
              <h3 className="blog-post-title">
                Sherwood’s Modern Archery Guide: What You Need to Know
              </h3>
              <div className="blog-post-content">
                <p>
                  Id amet, pellentesque viverra quis. Est sed nulla a ac eu
                  adipiscing odio lacus. Bibendum nibh venenatis sed egestas
                  turpis ornare sem dolor. In nisl amet, ac lacus non fermentum
                  enim. Quis quam lectus nisl interdum amet, egestas egestas
                  velit aliquam. Ornare magna ultricies leo semper condimentum
                  blandit.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <img src={i1} alt width={518} height={569} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img src={i2} alt width={1170} height={456} />
            </div>
          </div>
          <div className="row row-50">
            <div className="col-lg-7 order-lg-2">
              <h3 className="blog-post-title">
                The Basic Principles and Techniques of Modern Archery
              </h3>
              <div className="blog-post-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <article className="quote-primary">
                  <div className="quote-primary-body">
                    <div className="quote-primary-text">
                      <p className="q">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco{" "}
                      </p>
                    </div>
                  </div>
                  <div className="quote-primary-footer">
                    <div className="bg-dot" />
                    <p className="quote-primary-cite">Jane Smith</p>
                  </div>
                </article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </p>
                <ul className="list-marked">
                  <li>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur?{" "}
                  </li>
                  <li>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatur
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 pr-lg-5">
              <div className="row row-50">
                <div className="col-sm-6 col-lg-12">
                  <img src={i3} alt width={398} height={283} />
                </div>
                <div className="col-sm-6 col-lg-12">
                  <img src={i4} alt width={398} height={283} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="blog-post-share text-lg-right">
                <ul className="list-inline">
                  <li className="thin-title">Share post</li>
                  <li>
                    <a className="icon icon-sm fa-facebook" href="#" />
                  </li>
                  <li>
                    <a className="icon icon-sm fa-instagram" href="#" />
                  </li>
                  <li>
                    <a className="icon icon-sm fa-twitter" href="#" />
                  </li>
                  <li>
                    <a className="icon icon-sm fa-youtube-play" href="#" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
