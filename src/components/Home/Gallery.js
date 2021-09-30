import React from "react";

import i1 from "../../assets/images/gallery-1-465x383.jpg";
import i2 from "../../assets/images/gallery-2-465x383.jpg";
import i3 from "../../assets/images/gallery-3-465x383.jpg";
import i4 from "../../assets/images/gallery-4-465x383.jpg";
import i5 from "../../assets/images/gallery-5-465x383.jpg";
import i6 from "../../assets/images/gallery-6-465x383.jpg";
import i7 from "../../assets/images/gallery-7-465x383.jpg";
import i8 from "../../assets/images/gallery-8-465x383.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <section className="section section-xl">
        <div className="col-12 text-center">
          <h3>Gallery</h3>
        </div>
        <div className="row row-30" data-isotope-group="gallery">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow-outer">
            <div className="wow slideInDown">
              <div className="gallery-item-classic">
                <img src={i1} alt width={465} height={383} />
                <div className="gallery-item-classic-caption">
                  <a
                    href="images/gallery-1-original.jpg"
                    data-lightgallery="item"
                  >
                    zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow-outer">
            <div className="wow slideInDown">
              <div className="gallery-item-classic">
                <img src={i2} alt width={465} height={383} />
                <div className="gallery-item-classic-caption">
                  <a
                    href="images/gallery-2-original.jpg"
                    data-lightgallery="item"
                  >
                    zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow-outer">
            <div className="wow slideInDown">
              <div className="gallery-item-classic">
                <img src={i3} alt width={465} height={383} />
                <div className="gallery-item-classic-caption">
                  <a
                    href="images/gallery-3-original.jpg"
                    data-lightgallery="item"
                  >
                    zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow-outer">
            <div className="wow slideInDown">
              <div className="gallery-item-classic">
                <img src={i4} alt width={465} height={383} />
                <div className="gallery-item-classic-caption">
                  <a
                    href="images/gallery-4-original.jpg"
                    data-lightgallery="item"
                  >
                    zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow-outer">
            <div className="wow slideInDown">
              <div className="gallery-item-classic">
                <img src={i5} alt width={465} height={383} />
                <div className="gallery-item-classic-caption">
                  <a
                    href="images/gallery-5-original.jpg"
                    data-lightgallery="item"
                  >
                    zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow-outer">
            <div className="wow slideInDown">
              <div className="gallery-item-classic">
                <img src={i6} alt width={465} height={383} />
                <div className="gallery-item-classic-caption">
                  <a
                    href="images/gallery-6-original.jpg"
                    data-lightgallery="item"
                  >
                    zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow-outer">
            <div className="wow slideInDown">
              <div className="gallery-item-classic">
                <img src={i7} alt width={465} height={383} />
                <div className="gallery-item-classic-caption">
                  <a
                    href="images/gallery-7-original.jpg"
                    data-lightgallery="item"
                  >
                    zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 wow-outer">
            <div className="wow slideInDown">
              <div className="gallery-item-classic">
                <img src={i8} alt width={465} height={383} />
                <div className="gallery-item-classic-caption">
                  <a
                    href="images/gallery-8-original.jpg"
                    data-lightgallery="item"
                  >
                    zoom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
