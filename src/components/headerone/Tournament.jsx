import React from 'react'
import Slider  from 'react-slick'

function PrevArrow(props){
  const {className,onClick} = props;

  return(
    <button type='button' className={ className } onClick={ onClick } ><i className="fas fa-angle-left"></i></button>
  );
}
function NextArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className={ className } onClick={ onClick } ><i className="fas fa-angle-right"></i></button>
  );

}
function Tournament() {
  const settings={

    dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
	prevArrow:<PrevArrow/>,
	nextArrow:<NextArrow/>,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
  }
  return (
    <section className="tournament-area pb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="tournament-content">
            <h6 className="sub-title">check out our next</h6>
            <h4 className="title">GAMING TOURNAMENTS !</h4>
            <p>Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua.</p>
            <a href="/our-squad" className="btn">Join with us</a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="prize-pool">
            <h3 className="title">Prize pool</h3>
            <h5 className="prize">$80000</h5>
            <div className="coming-time" data-countdown="2022/5/29" />
            <img src="assets/img/images/prize_img.png" alt="" />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="winner-wrap">
            <h2 className="title">LAST WINNERS</h2>
            <Slider className="winner-active" {...settings}>
              <div className="winner-item">
                <div className="winner-thumb">
                  <img src="assets/img/images/winner_img01.png" alt="" />
                </div>
                <div className="winner-content">
                  <span className="place">2nd place</span>
                </div>
              </div>
              <div className="winner-item">
                <div className="winner-thumb">
                  <img src="assets/img/images/winner_img02.png" alt="" />
                </div>
                <div className="winner-content">
                  <span className="place">2nd place</span>
                </div>
              </div>
              <div className="winner-item">
                <div className="winner-thumb">
                  <img src="assets/img/images/winner_img03.png" alt="" />
                </div>
                <div className="winner-content">
                  <span className="place">2nd place</span>
                </div>
              </div>
              <div className="winner-item">
                <div className="winner-thumb">
                  <img src="assets/img/images/winner_img02.png" alt="" />
                </div>
                <div className="winner-content">
                  <span className="place">2nd place</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Tournament