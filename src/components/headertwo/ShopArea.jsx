import React from 'react'

function ShopArea() {
  return (
    <section className="shop-area pt-115 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title title-style-two text-center mb-70">
                <h2 className="title">check our gears</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
              <div className="shop-item mb-60">
                <div className="shop-thumb">
                  <img src="assets/img/shop/shop_wrap_img.png" alt="" className="shape" />
                  <a href="/shop-details"><img src="assets/img/shop/shop_img01.png" alt="" className="shop-img" /></a>
                  <div className="shop-date">
                    <span>in 4 days</span>
                  </div>
                  <div className="shop-share">
                    <a href="/shop-details"><i className="fas fa-share-alt" /></a>
                  </div>
                </div>
                <div className="shop-content">
                  <div className="shop-content-top">
                    <div className="shop-title">
                      <h5 className="title"><a href="/shop-details">HEADPHONES</a></h5>
                      <p>E-SPORTS</p>
                    </div>
                    <div className="price">
                      <span>$18</span>
                    </div>
                  </div>
                  <div className="shop-content-bottom">
                    <div className="shop-btn">
                      <a href="/shop-details" className="btn"><i className="fas fa-plus" />add to cart</a>
                    </div>
                    <div className="shop-wishlist">
                      <a href="/shop-details"><i className="far fa-heart" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
              <div className="shop-item mb-60">
                <div className="shop-thumb">
                  <img src="assets/img/shop/shop_wrap_img.png" alt="" className="shape" />
                  <a href="/shop-details"><img src="assets/img/shop/shop_img02.png" alt="" className="shop-img" /></a>
                  <div className="shop-date">
                    <span>in 4 days</span>
                  </div>
                  <div className="shop-share">
                    <a href="/shop-details"><i className="fas fa-share-alt" /></a>
                  </div>
                </div>
                <div className="shop-content">
                  <div className="shop-content-top">
                    <div className="shop-title">
                      <h5 className="title"><a href="/shop-details">controller</a></h5>
                      <p>E-SPORTS</p>
                    </div>
                    <div className="price">
                      <span>$29</span>
                    </div>
                  </div>
                  <div className="shop-content-bottom">
                    <div className="shop-btn">
                      <a href="/shop-details" className="btn"><i className="fas fa-plus" />add to cart</a>
                    </div>
                    <div className="shop-wishlist">
                      <a href="/shop-details"><i className="far fa-heart" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
              <div className="shop-item mb-60">
                <div className="shop-thumb">
                  <img src="assets/img/shop/shop_wrap_img.png" alt="" className="shape" />
                  <a href="/shop-details"><img src="assets/img/shop/shop_img03.png" alt="" className="shop-img" /></a>
                  <div className="shop-date">
                    <span>in 4 days</span>
                  </div>
                  <div className="shop-share">
                    <a href="/shop-details"><i className="fas fa-share-alt" /></a>
                  </div>
                </div>
                <div className="shop-content">
                  <div className="shop-content-top">
                    <div className="shop-title">
                      <h5 className="title"><a href="/shop-details">gaming mask</a></h5>
                      <p>E-SPORTS</p>
                    </div>
                    <div className="price">
                      <span>$45</span>
                    </div>
                  </div>
                  <div className="shop-content-bottom">
                    <div className="shop-btn">
                      <a href="/shop-details" className="btn"><i className="fas fa-plus" />add to cart</a>
                    </div>
                    <div className="shop-wishlist">
                      <a href="/shop-details"><i className="far fa-heart" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ShopArea