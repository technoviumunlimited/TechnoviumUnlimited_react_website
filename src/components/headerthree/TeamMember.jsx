import React from 'react'
import CountUp from "react-countup";

function TeamMember() {
  return (
    
    <section className="team-area-two">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title">
            <div className="section-title title-style-two text-center mb-60">
              <h2 className="title">Active Team Members</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="team-thumb mb-30">
            <img src="assets/img/team/team_img01.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team-thumb mb-30">
            <img src="assets/img/team/team_img02.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team-thumb mb-30">
            <img src="assets/img/team/team_img03.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="team-thumb mb-30">
            <img src="assets/img/team/team_img04.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="counter-area-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-20">
            <div className="counter-item-two text-center">
              <div className="counter-content">
                <h2 className="count"><span/><CountUp end={7878} duration={5}/>K</h2>
                <p>Unique Design</p>
              </div>
            </div>
          </div>
          <div className="col-20">
            <div className="counter-item-two text-center">
              <div className="counter-content">
                <h2 className="count"><span/><CountUp end={15} duration={5}/> +</h2>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-20">
            <div className="counter-item-two text-center">
              <div className="counter-content">
                <h2 className="count"><span/> <CountUp end={45} duration={5}/> euro</h2>
                <span>Last Year</span>
                <p>Winning Price</p>
              </div>
            </div>
          </div>
          <div className="col-20">
            <div className="counter-item-two text-center">
              <div className="counter-content">
                <h2 className="count"><span/><CountUp end={55} duration={5}/> euro</h2>
                <span>30th Dec</span>
                <p>Public Sale</p>
              </div>
            </div>
          </div>
          <div className="col-20">
            <div className="counter-item-two text-center">
              <div className="counter-content">
                <p>Creative and <br /> online game Pictionary or office Halda</p>
                <i className="far fa-copyright" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TeamMember