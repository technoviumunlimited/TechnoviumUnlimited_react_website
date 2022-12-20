import React from 'react'
import CountUp from "react-countup";


function CounterArea() {
  return (
    
        <section className="counter-area pb-70">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-9">
                <div className="counter-item mb-50">
                  <div className="counter-img">
                    <img src="assets/img/icon/counter_icon01.png" alt="" />
                  </div>
                  <div className="counter-content">
                    <h2 className="count"><span/> <CountUp end={39} duration={5}/> k+</h2>
                    <p>active fan flowers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div className="counter-item mb-50">
                  <div className="counter-img">
                    <img src="assets/img/icon/counter_icon02.png" alt="" />
                  </div>
                  <div className="counter-content">
                    <h2 className="count"><span/> <CountUp end={280} duration={5}/>k+</h2>
                    <p>Will sharpen your</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div className="counter-item mb-50">
                  <div className="counter-img">
                    <img src="assets/img/icon/counter_icon03.png" alt="" />
                  </div>
                  <div className="counter-content">
                    <h2 className="count">$<span/> <CountUp end={40} duration={5}/>k+</h2>
                    <p>your earnings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CounterArea