import React, { Component } from 'react';


export default class About extends Component {
    render() {
        return (
          <section id="about">
              <div className="container-fluid">
                <div className="side-info">
                  <div className="vertical-container">
                    <p className="vertical-text"> A few things about us 01</p>
                  </div>
                  <div className="side-line">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="container">
                  <div className="about-content">
                    <div className="row">
                      <div className="col-5 about-us">
                        <h2>we're <span>global</span></h2>
                        <p>Contrary to popular belief, <span>Lorem Ipsum</span> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        <div className="call-to-action">
                          <div className="arrow-container">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                          <div className="button-container">
                            <a href="#" className="button">
                              <span></span>
                              <p >Find out more</p>
                            </a>
                          </div>
                        </div>
                      </div>
                        {/* Start of carosuel*/}
                      <div className="col-7">
                        <div className="about-carosuel">
                          <div className="carosuel-container">
                            <div id="about-carosuel" className="carousel slide" data-ride="carousel">
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <div className="first-slide">
                                    <h5>global modeling</h5>
                                    <h4>we are no1!</h4>
                                    <div className="span-container">
                                      <span></span>
                                    </div>
                                    <img className="img-fluid" src="\img\globe.png" alt="globe"/>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="first-slide">
                                    <h5>global modeling</h5>
                                    <h4>we are no1!</h4>
                                    <div className="span-container">
                                      <span></span>
                                    </div>
                                    <img className="img-fluid" src="\img\globe.png" alt="globe"/>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="first-slide">
                                    <h5>global modeling</h5>
                                    <h4>we are no1!</h4>
                                    <div className="span-container">
                                      <span></span>
                                    </div>
                                    <img className="img-fluid" src="\img\globe.png" alt="globe"/>
                                  </div>
                                </div>
                              </div>
                              {/* carosuel controlers and indicators*/}
                              <div className="carosuel-buttons-container">
                                {/* Indicators*/}
                                <div className="indicators-container">
                                  <ol className="carousel-indicators">
                                    <li data-target="#about-carosuel" data-slide-to="0" className="active"></li>
                                    <li data-target="#about-carosuel" data-slide-to="1"></li>
                                    <li data-target="#about-carosuel" data-slide-to="2"></li>
                                  </ol>
                                </div>
                                <div className="span-line">
                                  <span></span>
                                </div>
                                {/*carosuel controlers */}
                                <div className="control-container">
                                  <a className="carousel-control-prev" href="#about-carosuel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                  </a>
                                  <a className="carousel-control-next" href="#about-carosuel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                  </a>
                                </div>
                              </div>
                              <div className="carosuel-container-span">
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End of carousel*/}
                    </div>
                  </div>
                </div>
              </div>
          </section>
        );
    }
}
