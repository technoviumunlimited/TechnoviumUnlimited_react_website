import React from 'react'
import "animate.css"
import {Accordion} from "react-bootstrap"


function Roadmap() {

  return (
    <section className="roadmap-area">
    <div className="container">
      <div className="row justify-content-center justify-content-xl-end">
        <div className="col-12">
          <div className="section-title title-style-three">
            <h2 className="title">Roadmap</h2>
          </div>
        </div>
        <div className="col-xl-9 col-lg-11">
          <div className="roadmap-timeline-wrap">
            <ul>
              <li>
                <div className="sold-percentage">
                  <h2 className="title faq">10% Sold</h2>
                </div>
                <div className="timeline-content wow fadeInRight" data-wow-delay=".2s">
                  <div className="image">
                    <img src="assets/img/images/timeline_img01.png" alt="" />
                  </div>
                  <p>We’re gaming is not limited entertainment and hobby, it has become a good career option for all those.</p>
                </div>
              </li>
              <li>
                <div className="sold-percentage">
                  <h2 className="title">20% Sold</h2>
                </div>
                <div className="timeline-content wow fadeInRight" data-wow-delay=".4s">
                  <div className="sold-img">
                    <img src="assets/img/images/timeline_img02.png" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="sold-percentage">
                  <h2 className="title">30% Sold</h2>
                </div>


                <div className="timeline-content wow fadeInRight" data-wow-delay=".2s">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>30% sold</Accordion.Header>
                          <Accordion.Body>
                          <h5 className="title">We finally moved out of Uncle Biff’s basement. Release of Uncle Biff’s photo.</h5>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Development Lead Sold</Accordion.Header>
                          <Accordion.Body>
                          <h5 className="title">We finally moved out of Uncle Biff’s basement.Release of Uncle Biff’s photo.</h5>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>community lead</Accordion.Header>
                          <Accordion.Body>
                          <h5 className="title">We finally moved out of Uncle Biff’s basement. Release of Uncle Biff’s photo.</h5>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>Project lead 30% Sold</Accordion.Header>
                          <Accordion.Body>
                          <h5 className="title">We finally moved out of Uncle Biff’s basement.Release of Uncle Biff’s photo.</h5>
                          </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="timeline-bottom-image animate__animated animate__fadeInUp animate__delay-.2s">
            <img src="assets/img/images/timeline_bottom_img.jpg" alt="" className="main-img" />
            <img src="assets/img/images/timeline_shape.png" alt="" className="shape" />
            <a href="/contact" className="btn">join with us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Roadmap