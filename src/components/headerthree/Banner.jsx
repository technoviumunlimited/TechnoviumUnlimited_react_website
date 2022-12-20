import React from 'react'
import 'animate.css'




function Banner() {


  return (
    
    <div className="banner-area-three banner-three-bg">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-9 order-0 order-lg-2">
          <div className="banner-img-wrap">
            <div className="banner-img-item">
              <img src="assets/img/slider/slider_shape01.png" alt="" className="shape" />
              <img src="assets/img/slider/slider_img01.png" alt="" className="main-img" />
            </div>
            <div className="banner-img-item">
              <img src="assets/img/slider/slider_shape02.png" alt="" className="shape" />
              <img src="assets/img/slider/slider_img02.png" alt="" className="main-img" />
            </div>
            <div className="banner-img-item">
              <img src="assets/img/slider/slider_shape03.png" alt="" className="shape" />
              <img src="assets/img/slider/slider_img03.png" alt="" className="main-img" />
            </div>
            <div className="banner-img-item">
              <img src="assets/img/slider/slider_shape04.png" alt="" className="shape" />
              <img src="assets/img/slider/slider_img04.png" alt="" className="main-img" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-content">
            <h4 className="small-title animate__animated animate__fadeInUp animate__delay-.2s " >Design Experience</h4>
            <h2 className="title animate__animated animate__fadeInUp animate__delay-.4s"><i className="fas fa-globe" />Global Steam <br /> With Our <span>Community</span></h2>
            <p className="animate__animated animate__fadeInUp animate__delay-.6s">You can download a copy of the data saved in your Google Account to use it with another service.</p>
            <div className="banner-btn animate__animated animate__fadeInUp animate__delay-.8s">
              <a href="/contact" className="btn">Join with us <i className="fas fa-angle-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Banner