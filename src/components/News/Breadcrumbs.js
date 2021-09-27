import React from "react";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section
        className="parallax-container"
        data-parallax-img="images/icon-lists-title-bg.jpg"
      >
        <div className="parallax-content breadcrumbs-custom context-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9">
                <h2 className="breadcrumbs-custom-title">News 1</h2>
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li className="active">News 1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
