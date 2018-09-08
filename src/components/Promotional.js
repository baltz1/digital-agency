import React, { Component } from 'react';

export default class Promotional extends Component {
    render() {
        return (
          <section id="promotional">
            <div className="container-fluid">
              <div className="row">
                <div className="col-10 container-size">
                  <div className="overlay"></div>
                  <iframe title="prmo video" className="video" src="https://www.youtube.com/embed/Fy0xiVUgQTA?rel=0&amp;showinfo=0&autoplay=1&mute=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
                <div className="col-2">
                  <div className="side-info">
                    <div className="side-line">
                      <span></span>
                      <span></span>
                    </div>
                    <div className="vertical-container">
                      <p className="vertical-text"> Promotional clips 02</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="big-line">
                  <span></span>
                </div>
                <div className="smaller-line">
                  <span></span>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
