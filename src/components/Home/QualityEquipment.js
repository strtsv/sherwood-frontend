import React from "react";

class QualityEquipment extends React.Component {
  render() {
    return (
      <section className="section section-sm bg-gray">
        <div className="container">
          <div className="row row-30 row-xl-85">
            <div className="col-md-6 col-lg-4 pl-xl-3">
              <div className="box-icon-modern box-decor-r">
                <div className="box-icon-inner decorate-triangle">
                  <span className="icon-xl linearicons-archery" />
                </div>
                <div className="box-icon-caption mt-3">
                  <h4>
                    <a href="#">Quality Equipment</a>
                  </h4>
                  <p>For beginners and pros</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pl-xl-3">
              <div className="box-icon-modern">
                <div className="box-icon-inner decorate-triangle">
                  <span className="icon-xl linearicons-landscape" />
                </div>
                <div className="box-icon-caption mt-3">
                  <h4>
                    <a href="#">Best Location</a>
                  </h4>
                  <p>Easy to reach</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 pl-xl-3">
              <div className="box-icon-modern box-decor-l">
                <div className="box-icon-inner decorate-triangle">
                  <span className="icon-xl linearicons-glass2" />
                </div>
                <div className="box-icon-caption mt-3">
                  <h4>
                    <a href="#">Catering</a>
                  </h4>
                  <p>Excellent food & drinks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default QualityEquipment;
