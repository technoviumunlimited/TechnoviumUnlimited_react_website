import React from 'react'
import Slider from "react-slick";

function PrevArrow(props){

  const {className,onClick} = props;
  return(
    <button type='button' className={ className } onClick={ onClick }><i className="far fa-arrow-alt-circle-left"></i></button>
  )
}
function NextArrow(props){

  const {className,onClick} = props;
  return(
    <button type='button' className={ className } onClick={ onClick }><i className="far fa-arrow-alt-circle-right"></i></button>
  )
}
function Gallery() {
    var settings = {
      centerMode: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      centerPadding: '0',
      slidesToShow: 1,
      prevArrow: <PrevArrow/>,
      nextArrow:<NextArrow/>,
     arrows:false,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '30px',
            infinite: true,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '50px',
            infinite: true,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',
            arrows: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',
            arrows: false,
          }
        },
      ]
      };  

  return (

    <div className="gallery-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <Slider className="gallery-active" {...settings}>
            <div className="gallery-item">
              <img src="assets/img/gallery/gallery_img01.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="assets/img/gallery/gallery_img02.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="assets/img/gallery/gallery_img03.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="assets/img/gallery/gallery_img04.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="slider-nav" />
    </div>
  </div>
  )
}

export default Gallery