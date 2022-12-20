import React from 'react'
import 'animate.css';
function Banner() {
  return (
    <div id="parallax" className="banner-area banner-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-lg-9">
              <div className="banner-content text-center">
                <h1 className="small-title animate__animated animate__fadeInUp animate__delay-.2s">Technovium</h1>
                <div className="banner-btn animate__animated animate__fadeInUp animate__delay-.6s">
                  <a href="technoviumunlimited://" className="btn">Speel Nu<i className="fas fa-play-circle" /></a>
                  <a href="/signup" className="text-btn">Registreer nu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Banner