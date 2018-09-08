import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
          <section id="header">
            <div className="container-fluid">
                <div className="row">
                  <div className="col-6 header-left">

                    <span></span>
                  </div>
                  <div className="col-6 header-right">

                  </div>
                </div>
                {/* This is the beginning of the carousel*/}
                <div className="container events">
                <div className="row">
                  <div id="carouselExampleControls" className="col-11 carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-7 events-left">
                            <p>Events</p>
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <h5>Fashion Week nyc 2018</h5>
                                  <div className="img-container">
                                    <img className="carousel-img" src={"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg"} alt="model"/>
                                  </div>
                                  <div className="check-now">
                                    <i className="fas fa-arrow-right"></i>
                                    <a href="#"><span></span>check now</a>
                                  </div>
                                  <div className="event-number">
                                    <h3>01</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 events-right">
                            <span className="top-line"></span>
                            <h2>
                              <span>award winning</span> modeling agency from <span>Milan</span>
                            </h2>
                            <span className="bottom-line"></span>
                          </div>
                        </div>
                      </div>
                      {/* Next carousel item*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-7 events-left">
                            <p>Events</p>
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <h5>Fashion Week nyc 2018</h5>
                                  <div className="img-container">
                                    <img className="carousel-img" src={"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg"} alt="model"/>
                                  </div>
                                  <div className="check-now">
                                    <i className="fas fa-arrow-right"></i>
                                    <a href="#"><span></span>check now</a>
                                  </div>
                                  <div className="event-number">
                                    <h3>02</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 events-right">
                            <span className="top-line"></span>
                            <h2>
                              <span>award winning</span> modeling agency from <span>Milan</span>
                            </h2>
                            <span className="bottom-line"></span>
                          </div>
                        </div>
                      </div>
                      {/* Next carousel item*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-7 events-left">
                            <p>Events</p>
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <h5>Fashion Week nyc 2018</h5>
                                  <div className="img-container">
                                    <img className="carousel-img" src={"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg"} alt="model"/>
                                  </div>
                                  <div className="check-now">
                                    <i className="fas fa-arrow-right"></i>
                                    <a href="#"><span></span>check now</a>
                                  </div>
                                  <div className="event-number">
                                    <h3>03</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 events-right">
                            <span className="top-line"></span>
                            <h2>
                              <span>award winning</span> modeling agency from <span>Milan</span>
                            </h2>
                            <span className="bottom-line"></span>
                          </div>
                        </div>
                      </div>
                      {/* Next carousel item*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-7 events-left">
                            <p>Events</p>
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <h5>Fashion Week nyc 2018</h5>
                                  <div className="img-container">
                                    <img className="carousel-img" src={"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwMDI5ODMxODE@._V1_UY256_CR98,0,172,256_AL_.jpg"} alt="model"/>
                                  </div>
                                  <div className="check-now">
                                    <i className="fas fa-arrow-right"></i>
                                    <a href="#"><span></span>check now</a>
                                  </div>
                                  <div className="event-number">
                                    <h3>04</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 events-right">
                            <span className="top-line"></span>
                            <h2>
                              <span>award winning</span> modeling agency from <span>Milan</span>
                            </h2>
                            <span className="bottom-line"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="indicator">
                      <ol className="carousel-indicators">
                        <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="3"></li>
                      </ol>
                      <div className="carousel-counter">
                        <span className="counter">01</span>
                        <p className="total-counter">/04</p>
                      </div>
                    </div>
                    <div className="controls">
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
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
