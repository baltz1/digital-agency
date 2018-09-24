import React, { Component } from 'react';

export default class News extends Component {
    render() {
        return (
          <section id="news">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="container content-align">
                  <div className="carousel-container">
                  {/* This is the start of the carousel */}
                    <div id="carouselNews" className="carousel slide" data-ride="carousel">
                      <div className="over-ride carousel-inner">
                       <div className="carousel-item active">
                          <div className="carousel-header">
                            <h1><span>nyc</span>fsn wk</h1>
                            <p className="news-description">100% participation in all major designers' presentations</p>
                            <div className="line-container">
                              <span className="design-line"></span>
                            </div>
                            <div className="post-date">
                              <p>Created on <span>feb 20, 2016</span></p>
                            </div>
                          </div>
                          <img className="d-block w-100" src="..." alt="First slide" />
                          <div>

                          </div>
                        </div>
                       <div className="carousel-item">
                          <img className="d-block w-100" src="..." alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src="..." alt="Third slide" />
                        </div> 
                      </div>
                      <div className="news-indicators">
                        <ol className="carousel-indicators">
                          <li data-target="#carouselNews" data-slide-to="0" className="active"></li>
                          <li data-target="#carouselNews" data-slide-to="1"></li>
                          <li data-target="#carouselNews" data-slide-to="2"></li>
                        </ol>
                      </div>
                    </div>
                    {/* End of carousel */}
                  </div>
                  {/* carousel controls and indicators */}
                  <div className="news-controls">
                    <a className="carousel-control-prev" href="#carouselNews" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselNews" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                sdg
              </div>
            </div>
          </div>
          </section>


        );
    }
}
