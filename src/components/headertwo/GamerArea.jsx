import React from 'react'
import { motion } from "framer-motion"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
function GamerArea() {
  return (
    <section className="just-gamer-area pt-120 pb-105">
          <div className="just-gamer-shape" />
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 col-lg-8 order-2 order-xl-0">
                <div className="just-gamer-content-box">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="find team member">
                        <div className="section-title">
                        <h2 className="title">EXPERIENCE just for gamers <span>OFFER</span></h2>
                        <p>Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
                          nisi, condimentum viverra felis nunc et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.</p>
                      </div>
                      <div className="gamer-content">
                        <i className="far fa-arrow-alt-circle-right" />
                        <p>Will sharpen your brain and focus</p>
                      </div>
                        </Tab>
                        
                        <Tab eventKey="homprofilee" title="our game shop">
                        <div className="section-title">
                        <h2 className="title">EXPERIENCE just for gamers <span>OFFER</span></h2>
                        <p>Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
                          nisi, condimentum viverra felis nunc et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.</p>
                      </div>
                      <div className="gamer-content">
                        <i className="far fa-arrow-alt-circle-right" />
                        <p>Will sharpen your brain and focus</p>
                      </div>
                        </Tab>
                        
                       
              </Tabs>
                  
                </div>
              </div>
              <div className="col-xl-6 col-lg-8">
                <div className="just-gamer-img position-relative text-center text-xxl-end">
                  <img src="assets/img/images/game_img01.png" alt="" className="main-img" />
                  <motion.img
                  initial={{x:30, opacity:0}}
                  animate={{x:0, opacity:1}}
                  transition={{delay:.3, duration:.6}}

                   src="assets/img/images/game_img02.png" alt="" className="shape-1 wow fadeInRight" data-wow-delay=".3s" />
                  <motion.img 
                   initial={{x:30, opacity:0}}
                   animate={{x:0, opacity:1}}
                   transition={{delay:0.6,duration:.6}}
                  src="assets/img/images/game_img03.png" alt="" className="shape-2 wow fadeInRight" data-wow-delay=".6s" />
                  <motion.img 
                   initial={{x:-30, opacity:0}}
                   animate={{x:0, opacity:1}}
                   transition={{delay:.9,duration:.9}}
                  src="assets/img/images/game_img04.png" alt="" className="shape-3 wow fadeInLeft" data-wow-delay=".9s" />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default GamerArea