import React,{ useEffect } from 'react';
import 'animate.css';


function Banner() {
  
  useEffect(()=>{
    
  })
  return (
    <div className="banner-area-two banner-bg">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-xxl-8 col-lg-9">
            <div className="banner-content text-center">
                <h4 className="small-title animate__animated animate__fadeInUp animate__delay-.2s">the Season 8</h4>
                <h2 className="title animate__animated animate__fadeInUp animate__delay-.4s">steam</h2>
                <div className="banner-btn animate__animated animate__fadeInUp animate__delay-.6s">
                <a href="/match-single" className="btn">watch live<i className="fas fa-play-circle" /></a>
                <a href="/contact" className="text-btn">dream making</a>
                </div>
            </div>
            </div>
        </div>
        </div>
  </div>
  )
}

export default Banner