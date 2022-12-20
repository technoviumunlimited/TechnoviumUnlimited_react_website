import React from 'react'
import { motion } from "framer-motion"
function Breadcrumb() {
  return (
    <section className="breadcrumb-area breadcrumb-bg breadcrumb-bg-three">
    <div className="breadcrumb-overflow">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6 order-2 order-lg-1">
              <div className="breadcrumb-img-three text-center">
                <img src="assets/img/images/breadcrumb_team_bg.png" alt="" />
                <img src="assets/img/images/team_logo01.png" alt="" className="team-logo" />
                <h4 className="team-name">sky warrior</h4>
              </div>
            </div>
            <div className="col-lg-4 order-0 order-lg-1">
              <div className="breadcrumb-content">
                <h2 className="title">match single</h2>
                <div className="coming-time" data-countdown="2022/5/29" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-3 order-lg-2">
              <div className="breadcrumb-img-three right-team text-center">
                <img src="assets/img/images/breadcrumb_team_bg.png" alt="" />
                <img src="assets/img/images/team_logo02.png" alt="" className="team-logo" />
                <h4 className="team-name">heater killer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div 
      initial={{ x: -380,opacity:0}}
      animate={{ x: 0, opacity: 1 }} 
  
      transition={{
        delay: 0.2,
        duration: 2.5 ,
      }}
      className="breadcrumb-shape shape-1 " ><img src="assets/img/bg/breadcrumb_shape01.png" alt="" /></motion.div>
      <motion.div 
      initial={{ x: 380,opacity:0}}
      animate={{ x: 0, opacity: 1 }} 
 
      transition={{
        delay: 0.2,
        duration: 2.5 ,
      }}
      className="breadcrumb-shape shape-2 " ><img src="assets/img/bg/breadcrumb_shape02.png" alt="" /></motion.div>
    </div>
  </section>
  )
}

export default Breadcrumb