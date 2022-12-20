import React,{ useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from "react-bootstrap/Tab"



function Shopdetails() {
  const [count, setCount] = useState(0);
 
  return (
    <section className="shop-details-area black-bg">
    <div className="container">
      <div className="row">



        <div className="col-lg-6">
        


                  <div className="shop-details-images">



                    
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                        <div className="shop-details-thumb">
                          <img src="assets/img/shop/sd_wrap_img.png" alt="" className="wrap-bg" />
                          <img src="assets/img/shop/sd_thumb01.png" alt="" className="main-img" />
                          <div className="shop-date">
                            <span>in 4 days</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="tab-pane" id="two" role="tabpanel" aria-labelledby="two-tab">
                        <div className="shop-details-thumb">
                          <img src="assets/img/shop/sd_wrap_img.png" alt="" className="wrap-bg" />
                          <img src="assets/img/shop/sd_thumb02.png" alt="" className="main-img" />
                          <div className="shop-date">
                            <span>in 4 days</span>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="three" role="tabpanel" aria-labelledby="three-tab">
                        <div className="shop-details-thumb">
                          <img src="assets/img/shop/sd_wrap_img.png" alt="" className="wrap-bg" />
                          <img src="assets/img/shop/sd_thumb03.png" alt="" className="main-img" />
                          <div className="shop-date">
                            <span>in 4 days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="one-tab" data-bs-toggle="tab" data-bs-target="#one" type="button" role="tab" aria-controls="one" aria-selected="true">
                          <img src="assets/img/shop/sd_nav_img01.jpg" alt="" />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#two" type="button" role="tab" aria-controls="two" aria-selected="false">
                          <img src="assets/img/shop/sd_nav_img02.jpg" alt="" />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#three" type="button" role="tab" aria-controls="three" aria-selected="false">
                          <img src="assets/img/shop/sd_nav_img03.jpg" alt="" />
                        </button>
                      </li>
                    </ul>
                  </div>




        </div>



        <div className="col-lg-6">
          <div className="shop-details-content">
            <span>Kettlebell</span>
            <h3 className="title">Best Offline Games on Android</h3>
            <div className="shop-details-rating">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <span>( 01 Review )</span>
            </div>
            <div className="shop-details-price">
              <h2 className="price">$52.00</h2>
              <h5 className="stock-status">- IN Stock</h5>
            </div>
            <p>Lorem Ipsum is simply dummy text of the prig and typesetting industry. Lorem Ipsum has been text of the prig and typesetting industry.</p>
            <div className="shop-details-quantity">
              <span className="quantity">Quantity</span>
              <div className="cart-plus-minus">
                <input type="button"/>

                  
                <div className="dec qtybutton" onClick={()=>setCount(count-1)}>-</div>
                   
                    <h4>{count}</h4>

                <div className="inc qtybutton" onClick={()=>setCount(count+1)}>+</div>
              </div>
            </div>
            <div className="shop-details-button-wrap">
              <a  href="/#" className="btn disabled">Sold Out</a>
              <a  href="/#" className="btn">buy it now</a>
            </div>
            <div className="shop-details-bottom">
              <ul className="bottom-list">
                <li><span>Categories :</span><a  href="/#">controller, </a><a  href="/#">xbox</a></li>
                <li><span>SKU :</span><a  href="/#">4589654</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="shop-description-wrap">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="DESCRIPTION" title="DESCRIPTION">
              <div className="product-desc-content">
                  <p>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. auctor loboorti lacus. Phasellus gravida semper nisi. Aliquam lobortis printing and typesetting industry. Lorem Ipsum has been in the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                  <p><span>*Call branch</span> to verify availability dummy text of the printing and typesetting industry.</p>
                </div>
              </Tab>
              <Tab eventKey="profile" title="ADDITIONAL INFORMATION">
              <div className="product-desc-info">
                  <div className="row">
                    <div className="col-xl-3 col-md-5">
                      <div className="product-desc-img">
                        <img src="assets/img/shop/desc_img.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-xl-9 col-md-7">
                      <h5 className="small-title">Kettlebell Gaming Console</h5>
                      <p>Cramond Leopard &amp; Pythong Print Anorak Jacket In Beige but also the leap into
                        electronic typesetting, remaining lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <ul className="product-desc-list">
                        <li>65% poly, 35% rayon</li>
                        <li>Partially lined</li>
                        <li>Button cuff sleeves</li>
                        <li>Hard Gaming Console</li>
                        <li>Lightweight semi-sheer fabrication</li>
                        <li>Made in USA</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="review" title="REVIEWS (0)" >
              <div className="product-desc-review">
                  <div className="review-title mb-20">
                    <h4 className="title">Customer Reviews (0)</h4>
                  </div>
                  <div className="left-rc">
                    <p>No reviews yet</p>
                  </div>
                  <div className="right-rc">
                    <a  href="/#">Write a review</a>
                  </div>
                </div>
              </Tab>
            </Tabs>
           
            <div className="tab-content" id="myTabContentTwo">
              <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
              
              </div>
              <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
               
              </div>
              <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div className="product-desc-review">
                  <div className="review-title mb-20">
                    <h4 className="title">Customer Reviews (0)</h4>
                  </div>
                  <div className="left-rc">
                    <p>No reviews yet</p>
                  </div>
                  <div className="right-rc">
                    <a  href="/#">Write a review</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="related-products-wrap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two text-center mb-60">
              <h2 className="title">related product</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
            <div className="shop-item mb-60">
              <div className="shop-thumb">
                <img src="assets/img/shop/shop_wrap_img02.png" alt="" className="shape" />
                <a  href="/shop-details"><img src="assets/img/shop/shop_img01.png" alt="" className="shop-img" /></a>
                <div className="shop-date">
                  <span>in 4 days</span>
                </div>
                <div className="shop-share">
                  <a  href="/#"><i className="fas fa-share-alt" /></a>
                </div>
              </div>
              <div className="shop-content">
                <div className="shop-content-top">
                  <div className="shop-title">
                    <h5 className="title"><a  href="/shop-details">HEADPHONES</a></h5>
                    <p>E-SPORTS</p>
                  </div>
                  <div className="price">
                    <span>$18</span>
                  </div>
                </div>
                <div className="shop-content-bottom">
                  <div className="shop-btn">
                    <a  href="/#" className="btn"><i className="fas fa-plus" />add to cart</a>
                  </div>
                  <div className="shop-wishlist">
                    <a  href="/#"><i className="far fa-heart" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
            <div className="shop-item mb-60">
              <div className="shop-thumb">
                <img src="assets/img/shop/shop_wrap_img02.png" alt="" className="shape" />
                <a  href="/shop-details"><img src="assets/img/shop/shop_img02.png" alt="" className="shop-img" /></a>
                <div className="shop-date">
                  <span>in 4 days</span>
                </div>
                <div className="shop-share">
                  <a  href="/#"><i className="fas fa-share-alt" /></a>
                </div>
              </div>
              <div className="shop-content">
                <div className="shop-content-top">
                  <div className="shop-title">
                    <h5 className="title"><a  href="/shop-details">controller</a></h5>
                    <p>E-SPORTS</p>
                  </div>
                  <div className="price">
                    <span>$29</span>
                  </div>
                </div>
                <div className="shop-content-bottom">
                  <div className="shop-btn">
                    <a  href="/#" className="btn"><i className="fas fa-plus" />add to cart</a>
                  </div>
                  <div className="shop-wishlist">
                    <a  href="/#"><i className="far fa-heart" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
            <div className="shop-item mb-60">
              <div className="shop-thumb">
                <img src="assets/img/shop/shop_wrap_img02.png" alt="" className="shape" />
                <a  href="/shop-details"><img src="assets/img/shop/shop_img03.png" alt="" className="shop-img" /></a>
                <div className="shop-date">
                  <span>in 4 days</span>
                </div>
                <div className="shop-share">
                  <a  href="/#"><i className="fas fa-share-alt" /></a>
                </div>
              </div>
              <div className="shop-content">
                <div className="shop-content-top">
                  <div className="shop-title">
                    <h5 className="title"><a  href="/shop-details">gaming mask</a></h5>
                    <p>E-SPORTS</p>
                  </div>
                  <div className="price">
                    <span>$45</span>
                  </div>
                </div>
                <div className="shop-content-bottom">
                  <div className="shop-btn">
                    <a  href="/#" className="btn"><i className="fas fa-plus" />add to cart</a>
                  </div>
                  <div className="shop-wishlist">
                    <a  href="/#"><i className="far fa-heart" /></a>
                  </div>
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

export default Shopdetails