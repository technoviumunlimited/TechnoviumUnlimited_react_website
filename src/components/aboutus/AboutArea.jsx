import React,{ useEffect } from 'react'
import Slider from "react-slick";
import "magnific-popup"
import $ from "jquery"


function AboutArea() {
    useEffect(()=>{

		$('.popup-image').magnificPopup({
			type: 'image',
            gallery: {
                enabled: true
            }
		});
	},[])

    const settings ={
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]

    }
  return (
    <section className="about-area about-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="about-title text-center">
            <h2 className="title">We Are A Crative Gaming Agency, Building Websites that Gaming Traffic, Engagement &amp; Conversion For Game Leanding Brands</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="about-info-item">
            <div className="about-info-icon">
              <img src="assets/img/icon/gp_icon02.png" alt="" />
            </div>
            <div className="about-info-content">
              <h4 className="title">Discover</h4>
              <p>Nullam quis Macenas thats ullmcorper dui et placerat feugia.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="about-info-item">
            <div className="about-info-icon">
              <img src="assets/img/icon/gp_icon01.png" alt="" />
            </div>
            <div className="about-info-content">
              <h4 className="title">Live Streaming</h4>
              <p>Nullam quis Macenas thats ullmcorper dui et placerat feugia.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="about-info-item">
            <div className="about-info-icon">
              <img src="assets/img/icon/gp_icon05.png" alt="" />
            </div>
            <div className="about-info-content">
              <h4 className="title">Gaming Updates</h4>
              <p>Nullam quis Macenas thats ullmcorper dui et placerat feugia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-gallery-area">
      <div className="container">
        <Slider className="row about-gallery-active" {...settings}>
          <div className="col-12">
            <div className="about-gallery-item">
              <a href="assets/img/images/about_gallery01.jpg" className="popup-image"><img src="assets/img/images/about_gallery01.jpg" alt="" /></a>
            </div>
          </div>
          <div className="col-12">
            <div className="about-gallery-item">
              <a href="assets/img/images/about_gallery02.jpg" className="popup-image"><img src="assets/img/images/about_gallery02.jpg" alt="" /></a>
            </div>
          </div>
          <div className="col-12">
            <div className="about-gallery-item">
              <a href="assets/img/images/about_gallery03.jpg" className="popup-image"><img src="assets/img/images/about_gallery03.jpg" alt="" /></a>
            </div>
          </div>
          <div className="col-12">
            <div className="about-gallery-item">
              <a href="assets/img/images/about_gallery04.jpg" className="popup-image"><img src="assets/img/images/about_gallery04.jpg" alt="" /></a>
            </div>
          </div>
          <div className="col-12">
            <div className="about-gallery-item">
              <a href="assets/img/images/about_gallery05.jpg" className="popup-image"><img src="assets/img/images/about_gallery05.jpg" alt="" /></a>
            </div>
          </div>
          <div className="col-12">
            <div className="about-gallery-item">
              <a href="assets/img/images/about_gallery06.jpg" className="popup-image"><img src="assets/img/images/about_gallery06.jpg" alt="" /></a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default AboutArea