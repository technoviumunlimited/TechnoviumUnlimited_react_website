import React from 'react'

function ContactArea() {
  return (
    <section className="contact-area black-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="contact-wrap">
            <div className="contact-title">
              <h2 className="title"><span>Contact Us</span> Let's Talk Question.</h2>
              <p>Lorem Ipsum is simply dummy text of the prig and typesetting industry. Lorem Ipsum has been text of the prig and typesetting industry.</p>
            </div>
            <form action="#" className="contact-form">
              <div className="form-grp">
                <label htmlFor="name">Your Name <span>*</span></label>
                <input type="text" id="name" placeholder="Jon Deo..." />
              </div>
              <div className="form-grp">
                <label htmlFor="email">Your email <span>*</span></label>
                <input type="email" id="email" placeholder="info@example.com" />
              </div>
              <div className="form-grp">
                <label htmlFor="message">Your Message <span>*</span></label>
                <textarea name="message" id="message" placeholder="Opinion..." defaultValue={""} />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Don’t show your email address
                </label>
              </div>
              <button type="submit" className="btn">submit now</button>
            </form>
          </div>
        </div>
        <div className="col-lg-5 col-md-8">
          <div className="contact-info-wrap">
            <div className="contact-info-map">
              <img src="assets/img/images/contact_info_map.png" alt="" />
            </div>
            <div className="contact-info-list">
              <ul>
                <li>
                  <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                  <div className="content">
                    <p>W84 New Park Lan, New York, NY 4586 <br /> United States</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><i className="fas fa-phone-alt" /></div>
                  <div className="content">
                    <p>+9 (256) 254 9568</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><i className="fas fa-envelope-open" /></div>
                  <div className="content">
                    <p>Contact@ info.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-social">
              <ul>
                <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                <li><a href="/#"><i className="fab fa-pinterest-p" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactArea