import React from 'react'

function Newsletter() {
  return (
    <section className="newsletter-area newsletter-area-bg pb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="newsletter-wrap">
            <div className="newsletter-content">
              <div className="newsletter-icon">
                <img src="assets/img/icon/newsletter_icon.png" alt="" />
              </div>
              <div className="newsletter-title">
                <h2 className="title">SUBSCRIBE TO OUR NEWSLETTER</h2>
              </div>
            </div>
            <div className="newsletter-form">
              <form action="#">
                <input type="email" placeholder="Your Email Address" />
                <button className="btn"><i className="fas fa-plus" />add to cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newsletter