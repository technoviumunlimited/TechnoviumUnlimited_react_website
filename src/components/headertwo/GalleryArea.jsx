import React,{useState, useEffect} from 'react';
import Slider from "react-slick"
import "magnific-popup"
import $ from "jquery";


function PrevArrow(props) {
  const { className, onClick } = props;
  return (
      <button type="button" className={ className  } onClick={ onClick }><i className="fas fa-angle-left"></i></button>
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  return (
      <button type="button" className={ className  } onClick={ onClick }><i className="fas fa-angle-right"></i></button>
  );
}

function GalleryArea() {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.gallery-active-two',
    dots: false,
    arrows: true,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
    
  }
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1,slider2;
 useEffect(function(){
    setNav1(slider1)
    setNav2(slider2)
  },[slider1,slider2])
   
  
	useEffect(()=>{

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	},[])

  return (
    <div className="gallery-area-two gallery-bg pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title title-style-two text-center mb-70">
                <h2 className="title">our TRENDING MATCH'S</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <Slider className="gallery-active-two" asNavFor={nav2}
               ref={slider => (slider1 = slider)}
               arrows = {false}
              >
               
                <div className="gallery-item">
                  <img src="assets/img/gallery/s_gallery_img01.jpg" alt="" />
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <svg x="0px" y="0px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                      <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                      <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1" />
                    </svg>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="assets/img/gallery/s_gallery_img02.jpg" alt="" />
                  <a href="https://www.youtube.com/watch?v=Axmg1E4HrVE" className="popup-video">
                    <svg x="0px" y="0px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                      <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                      <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1" />
                    </svg>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="assets/img/gallery/s_gallery_img03.jpg" alt="" />
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <svg x="0px" y="0px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                      <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                      <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1" />
                    </svg>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="assets/img/gallery/s_gallery_img04.jpg" alt="" />
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <svg x="0px" y="0px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                      <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                      <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1" />
                    </svg>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="assets/img/gallery/s_gallery_img05.jpg" alt="" />
                  <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video">
                    <svg x="0px" y="0px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                      <circle className="circle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                      <polygon className="triangle" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1" />
                    </svg>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
          <div className="gallery-two-bottom">
            <div className="gallery-nav" />
            <Slider className="gallery-nav-active"  {...settings} asNavFor={nav1}
            
            
            swipeToSlide={true}
            focusOnSelect={true}
            ref={slider => (slider2 = slider)} slidesToShow={1} arrows={true} >
            
              <h4>EVE Online</h4>
              <h4>The Shadow</h4>
              <h4>Fata Morgana</h4>
              <h4>Vampire Blood</h4>
              <h4>Command 69</h4>
            </Slider>
          </div>
        </div>
      </div>
  )
}

export default GalleryArea