import React from 'react'

function MatchBlog() {
  return (
    <section className="blog-details-area black-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-item match-single-content">
                <div className="blog-content blog-details-content">
                  <h2 className="title">online games including shooting games</h2>
                  <div className="blog-meta">
                    <ul>
                      <li><a  href="/#">BY thomas lee</a></li>
                      <li><i className="far fa-clock" />march 10, 2022</li>
                      <li><i className="far fa-eye" />4,735 VIEWS</li>
                    </ul>
                  </div>
                  <p>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining five centuries, but also the leap into electronic.</p>
                  <p>Placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In auctor lobortis lacus. Phasellus id gravida semper nisi. Aliquam lobortis printing and typesetting industry. Lorem Ipsum has been the industr standard dummy text ever since the 150 when an unknown printer took a galley of type and scrambled it to make a type book specimen. It has survived not only five centuries, but also the leap electronic typesetting essentially.</p>
                  <figure className="match-single-img">
                    <div className="row">
                      <div className="col-md-7">
                        <img src="assets/img/images/game_single_img01.jpg" alt="" />
                      </div>
                      <div className="col-md-5">
                        <img src="assets/img/images/game_single_img02.jpg" alt="" />
                      </div>
                    </div>
                  </figure>
                  <p>Aliquam lobortis printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
                  <div className="blog-details-content-bottom">
                    <div className="post-tags">
                      <h6 className="title">post Tags :</h6>
                      <ul className="tags">
                        <li><a  href="/#">Online Game,</a></li>
                        <li><a  href="/#">Dota 2,</a></li>
                        <li><a  href="/#">Offline,</a></li>
                        <li><a  href="/#">Shooting</a></li>
                      </ul>
                    </div>
                    <ul className="social">
                      <li><a  href="/#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a  href="/#"><i className="fab fa-twitter" /></a></li>
                      <li><a  href="/#"><i className="fab fa-youtube" /></a></li>
                      <li><a  href="/#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="comment-reply-box">
                <h4 className="widget-title">ADD COMMENT</h4>
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" placeholder="Your Name *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="email" placeholder="Your E-mail *" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea name="comments" placeholder="Comments *" defaultValue={""} />
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Save my name, email, and website in this browser
                    </label>
                  </div>
                  <button className="btn" type="submit">POST COMMENT</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="blog-sidebar">
                <div className="blog-widget">
                  <h4 className="widget-title">Searching</h4>
                  <div className="sidebar-search">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </div>
                <div className="blog-widget">
                  <h4 className="widget-title">CATEGORIES</h4>
                  <div className="blog-categories">
                    <ul>
                      <li>
                        <a  href="/blog-details" data-background="assets/img/blog/categories_img01.jpg">
                          shooting games <span>26</span>
                        </a>
                      </li>
                      <li>
                        <a  href="/blog-details" data-background="assets/img/blog/categories_img02.jpg">
                          arcade free games <span>14</span>
                        </a>
                      </li>
                      <li>
                        <a  href="/blog-details" data-background="assets/img/blog/categories_img03.jpg">
                          online games <span>16</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-widget">
                  <h4 className="widget-title">tagS</h4>
                  <ul className="shop-sidebar-tags">
                    <li><a  href="/#">game</a></li>
                    <li><a  href="/#">offline</a></li>
                    <li><a  href="/#">online gaming</a></li>
                    <li><a  href="/#">shooting</a></li>
                    <li><a  href="/#">online games</a></li>
                    <li><a  href="/#">X-box</a></li>
                    <li><a  href="/#">zombie games</a></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MatchBlog