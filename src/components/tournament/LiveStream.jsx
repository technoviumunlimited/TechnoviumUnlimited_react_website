import React,{ useEffect } from 'react'
import Slider from "react-slick"
import 'magnific-popup'
import $ from "jquery"



function PrevArrow(props){
   const {className,onClick} = props;
   return(
       <button type='button' className={ className } onClick={ onClick } ><img src="assets/img/icon/left_arrow.png" alt=""/></button>
   );
}
function NextArrow(props){
    const {className,onClick} = props;
    return(
        <button type='button' className={ className } onClick={ onClick } ><img src="assets/img/icon/right_arrow.png" alt=""/></button>
    );
 }
function LiveStream() {

    useEffect(()=>{

        $('.popup-video').magnificPopup({
            type: 'iframe'
        });
        
    },[])

    const settings={

        dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
  prevArrow:<PrevArrow/>,
	nextArrow:<NextArrow/>,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
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
    <section className="live-streams-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title title-style-two text-center mb-60">
            <h2 className="title">WATCH LIVE STREAMS</h2>
          </div>
        </div>
      </div>
      <div className="live-streams-wrapper">
        <Slider className="row live-streams-active" {...settings}>
          <div className="col-lg-12">
            <div className="live-streams-item">
              <div className="streams-thumb">
                <img src="assets/img/images/live_img01.jpg" alt="" />
                <a className="popup-video" href="https://www.youtube.com/watch?v=1R559DWBYbU"><i className="fas fa-play-circle" /></a>
              </div>
              <div className="streams-bottom-wrap">
                <div className="streams-content">
                  <a target="blank" href="https://www.youtube.com/channel/UCtVufP_2Z8vCZjJOCPc3tjQ/live" className="live-btn">Live MATCHES</a>
                  <h4 className="title"><a target="blank" rel='noreferrer' href="https://www.youtube.com/channel/UCtVufP_2Z8vCZjJOCPc3tjQ/live">skyward sword</a></h4>
                  <span className="date">10th Mar 2022.</span>
                </div>
                <a href="https://www.youtube.com/channel/UCtVufP_2Z8vCZjJOCPc3tjQ/live" target="blank" className="watch-stream"><img src="assets/img/icon/watch_icon.png" alt="" /> watch stream</a>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="live-streams-item">
              <div className="streams-thumb">
                <img src="assets/img/images/live_img02.jpg" alt="" />
                <a className="popup-video" href="https://www.youtube.com/watch?v=1R559DWBYbU"><i className="fas fa-play-circle" /></a>
              </div>
              <div className="streams-bottom-wrap">
                <div className="streams-content">
                  <a target="blank" href="https://www.youtube.com/channel/UCtVufP_2Z8vCZjJOCPc3tjQ/live" className="live-btn">Live MATCHES</a>
                  <h4 className="title"><a target="blank" href="https://www.youtube.com/channel/UCtVufP_2Z8vCZjJOCPc3tjQ/live">skyward sword</a></h4>
                  <span className="date">10th Mar 2022.</span>
                </div>
                <a href="https://www.youtube.com/channel/UCtVufP_2Z8vCZjJOCPc3tjQ/live" target="blank" className="watch-stream"><img src="assets/img/icon/watch_icon.png" alt="" /> watch stream</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default LiveStream