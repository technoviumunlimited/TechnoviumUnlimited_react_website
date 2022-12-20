import React from 'react'
import { motion } from "framer-motion"


function Breadcrumb(props) {
  return (
   
    <section className="breadcrumb-area breadcrumb-bg">
    <div className="breadcrumb-overflow">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="breadcrumb-content">
                <h2 className="title">{props.title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{props.title2}</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="breadcrumb-img text-center text-lg-end">
                <img src="assets/img/images/breadcrumb_img03.png" alt="" />
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
      className="breadcrumb-shape shape-1 "><img src="assets/img/bg/breadcrumb_shape01.png" alt="" /></motion.div>
      <motion.div
       initial={{ x: 380,opacity:0}}
       animate={{ x: 0, opacity: 1 }} 
  
       transition={{
         delay: 0.2,
         duration: 2.5 ,
       }}
   
       className="breadcrumb-shape shape-2 wow "><img src="assets/img/bg/breadcrumb_shape02.png" alt="" /></motion.div>
    </div>
  </section>
  )
}

export default Breadcrumb