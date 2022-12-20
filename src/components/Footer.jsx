import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="footer-top-wrap">
      <div className="container">
        <div className="footer-menu-wrap">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="f-logo">
                <a href="/index-3"><img src="assets/img/logo/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="footer-menu">
                <nav>
                  <ul className="navigation">
                    <li><a href="/index">HOME</a></li>
                    <li><a href="/about-us">ABOUT US</a></li>
                    <li><a href="/tournaments">TOURNAMENT</a></li>
                    <li><a href="/blog">BLOG</a></li>
                    <li><a href="/contact">PAGES</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                  </ul>
                  <div className="footer-search">
                    <form action="#">
                      <input type="text" placeholder="Find Here Now" />
                      <button><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-quick-link-wrap">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <div className="quick-link-list">
                <ul>
                  <li><a href="/contact">FAQ</a></li>
                  <li><a href="/contact">Help Center</a></li>
                  <li><a href="/contact">Terms of Use</a></li>
                  <li><a href="/contact">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="footer-social">
                <ul>
                  <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="/#"><i className="fab fa-youtube" /></a></li>
                  <li><a href="/#"><i className="fab fa-google" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="copyright-text">
              <p>Copyright © 2023 All Rights Reserved By <span>TechnoviumUnlimited</span></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="copyright-img text-center text-md-end">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer