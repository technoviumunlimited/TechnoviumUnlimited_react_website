import React,{useState,useEffect} from 'react';
import Slider from "react-slick";


function Live() {
  const settings = {
  slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.live-video-active',
	dots: false,
	arrows: false,
	centerMode: true,
	focusOnSelect: true,
	centerPadding: 0,
	vertical: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				vertical: false,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
	]
    
    
  }
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1,slider2;

 useEffect(function(){
    setNav1(slider1)
    setNav2(slider2)
  },[slider1,slider2])
   
  return (
   
    <section className="live-stream-area live-stream-bg pb-120 pt-120">
    <div className="container">
      <div className="live-stream-wrap">
        <div className="row">
          <div className="col-xl-4">
            <div className="live-stream-content">
              <div className="live-stream-icon">
                <img src="assets/img/icon/live-stream-icon.png" alt="" />
              </div>
              <div className="section-title">
                <h4 className="sub-title">MULTIPLE WAYS TO</h4>
                <h2 className="title">live streaming</h2>
              </div>
              <p>Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua.</p>
              <a href="/match-single">add streaming</a>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="live-videos-wrapper">
              <Slider className="live-video-active"
               asNavFor={nav2}
               ref={slider => (slider1 = slider)}
               arrows = {false}
               fade = {true}
               slidesToShow={1}
               slidesToScroll = {1}
              >
              
                <div className="live-video-item">
                  <div className="video">
                    <video className="liveVideo" autoPlay muted loop poster="assets/img/images/live-stream_img01.png">
                      <source src="assets/videos/video_01.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="coming-time" data-countdown="2022/5/29" />
                  <a href="https://www.twitch.tv/videos/1261623067" target="blank" className="btn">watch live <i className="fas fa-play-circle"></i> </a>
                </div>
                <div className="live-video-item">
                  <div className="video">
                    <video className="liveVideo" autoPlay muted loop poster="assets/img/images/live-stream_img02.png">
                      <source src="assets/videos/video_02.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="coming-time" data-countdown="2022/5/29" />
                  <a href="https://www.twitch.tv/videos/1261623067" target="blank" className="btn">watch live <i className="fas fa-play-circle"></i> </a>
                </div>
                <div className="live-video-item">
                  <div className="video">
                    <video className="liveVideo" autoPlay muted loop poster="assets/img/images/live-stream_img01.png">
                      <source src="assets/videos/video_01.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="coming-time" data-countdown="2022/5/29" />
                  <a href="https://www.twitch.tv/videos/1261623067" target="blank" className="btn">watch live <i className="fas fa-play-circle"></i> </a>
                </div>
                <div className="live-video-item">
                  <div className="video">
                    <video className="liveVideo" autoPlay muted loop poster="assets/img/images/live-stream_img02.png">
                      <source src="assets/videos/video_02.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="coming-time" data-countdown="2022/5/29" />
                  <a href="https://www.twitch.tv/videos/1261623067" target="blank"  className="btn">watch live <i className="fas fa-play-circle"></i> </a>
                </div>
              </Slider>
              <Slider className="live-video-navs"
               {...settings} asNavFor={nav1}
            
            
               swipeToSlide={true}
               focusOnSelect={true}
               ref={slider => (slider2 = slider)} slidesToShow={3} arrows={false}
               slidesToScroll = {1}>
                <div className="video-nav-item">
                  <div className="thumb"><img src="assets/img/images/video_nav01.jpg" alt="" /></div>
                  <div className="content">
                    <h4 className="title">Hancock</h4>
                  </div>
                </div>
                <div className="video-nav-item">
                  <div className="thumb"><img src="assets/img/images/video_nav02.jpg" alt="" /></div>
                  <div className="content">
                    <h4 className="title">Zombie</h4>
                  </div>
                </div>
                <div className="video-nav-item">
                  <div className="thumb"><img src="assets/img/images/video_nav03.jpg" alt="" /></div>
                  <div className="content">
                    <h4 className="title">WarField</h4>
                  </div>
                </div>
                <div className="video-nav-item">
                  <div className="thumb"><img src="assets/img/images/video_nav03.jpg" alt="" /></div>
                  <div className="content">
                    <h4 className="title">WarField</h4>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Live