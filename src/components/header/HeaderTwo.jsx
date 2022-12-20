import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";


function HeaderTwo() {
  useEffect(()=>{
    //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.menu-area .push-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
          $(this).toggleClass('open');
          $(this).prev('ul').slideToggle(500);
        });


        $('.menu-backdrop, .mobile-menu .close-btn').click (()=>{
          $('body').removeClass('mobile-menu-visible');
        })


        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });
      }

  },[]);


  useEffect(()=>{

    $(".menu-tigger").on("click", function () {
      $(".extra-info,.offcanvas-overly").addClass("active");
      return false;
    });
    $(".menu-close,.offcanvas-overly").on("click", function () {
      $(".extra-info,.offcanvas-overly").removeClass("active");
    });
/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
		$("#header-top-fixed").removeClass("header-fixed-position");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
		$("#header-top-fixed").addClass("header-fixed-position");
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}



  },[])


  useEffect(()=>{
    


    $(".menu-tigger").on("click", function () {
      $(".extra-info,.offcanvas-overly").addClass("active");
      return false;
    });
    $(".menu-close,.offcanvas-overly").on("click", function () {
      $(".extra-info,.offcanvas-overly").removeClass("active");
    });
/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
		$("#header-top-fixed").removeClass("header-fixed-position");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
		$("#header-top-fixed").addClass("header-fixed-position");
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}

       //Header search

    // $(".header-search > a").on('click', function () {
    //   $(".search-popup-wrap").slideToggle();
    //   return false;
    // });
    
    // $(".search-close").on('click', function () {
    //   $(".search-popup-wrap").slideUp(500);
    // });

  })

  return (
    <header>
    <div id="sticky-header" className="menu-area transparent-header">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
            <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
            <div className="menu-wrap main-menu">
              <nav className="menu-nav show">
                <div className="logo">
                  <a href="/#"><img src="assets/img/logo/logo.png" alt="" /></a>
                </div>
                <div className="navbar-wrap push-menu main-menu d-none d-lg-flex">
                  <ul className="navigation">
                    <li className="active menu-item-has-children"><a href="/#">Home</a>
                      <ul className="sub-menu">
                        <li><Link to="/">Home One</Link></li>
                        <li className="active"><Link to="/index-2">Home Two</Link></li>
                        <li><Link to="/index-3">Home three</Link></li>
                      </ul>
                    </li>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/tournaments">Tournament</a></li>
                    <li className="menu-item-has-children"><a href="/#">Blog</a>
                      <ul className="sub-menu">
                        <li><a href="/blog">Our Blog</a></li>
                        <li><a href="/blog-details">Blog Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children"><a href="/#">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="/our-squad">Our Squad</a></li>
                        <li><a href="/match-single">Match Single</a></li>
                        <li><a href="/shop">Our Shop</a></li>
                        <li><a href="/shop-details">Shop Details</a></li>
                      </ul>
                    </li>
                    <li><a href="/contact">contact</a></li>
                  </ul>
                </div>
                <div className="header-action">
                  <ul>
                    <li className="header-search"><a href="/#"><i className="fas fa-search" /></a></li>
                    <li className="header-th"><a href="/#" className="menu-tigger"><i className="fas fa-th" /></a></li>
                    <li className="header-phone">
                      <div className="phone-icon"><img src="assets/img/icon/phone.png" alt="" /></div>
                      <div className="call"><span>Call Us :</span><a href="tel:123">+012 3456 789</a></div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* Mobile Menu  */}
            <div className="mobile-menu">
              <nav className="menu-box">
                <div className="close-btn"><i className="fas fa-times" /></div>
                <div className="nav-logo"><a href="/#"><img src="assets/img/logo/logo.png" alt="" /></a>
                </div>
                <div className="menu-outer">
                  {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                </div>
                <div className="social-links">
                  <ul className="clearfix">
                    <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                    <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                    <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                    <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                    <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-backdrop" />
            {/* End Mobile Menu */}
          </div>
        </div>
      </div>
    </div>
         {/* header-search */}
         <div className="search-popup-wrap" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="search-close">
              <span><i className="fas fa-times" /></span>
            </div>
            <div className="search-wrap text-center">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="title">... Search Here ...</h2>
                    <div className="search-form">
                      <form action="#">
                        <input type="text" name="search" placeholder="Type keywords here" />
                        <button className="search-btn"><i className="fas fa-search" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-search-end */}
    {/* offCanvas-menu */}
    <div className="extra-info">
      <div className="close-icon menu-close">
        <button><i className="far fa-window-close" /></button>
      </div>
      <div className="logo-side mb-30">
        <a href="/#"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
      </div>
      <div className="side-info mb-30">
        <div className="contact-list mb-30">
          <h4>Office Address</h4>
          <p>123/A, Miranda City Likaoli <br /> Prikano, Dope</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Phone Number</h4>
          <p>+0989 7876 9865 9</p>
          <p>+(090) 8765 86543 85</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Email Address</h4>
          <p>info@example.com</p>
          <p>example.mail@hum.com</p>
        </div>
      </div>
      <ul className="side-instagram">
        <li><a href="/our-squad"><img src="assets/img/images/sd_insta01.jpg" alt="" /></a></li>
        <li><a href="/our-squad"><img src="assets/img/images/sd_insta02.jpg" alt="" /></a></li>
        <li><a href="/our-squad"><img src="assets/img/images/sd_insta03.jpg" alt="" /></a></li>
        <li><a href="/our-squad"><img src="assets/img/images/sd_insta04.jpg" alt="" /></a></li>
        <li><a href="/our-squad"><img src="assets/img/images/sd_insta05.jpg" alt="" /></a></li>
        <li><a href="/our-squad"><img src="assets/img/images/sd_insta06.jpg" alt="" /></a></li>
      </ul>
      <div className="social-icon-right mt-30">
        <a href="/#"><i className="fab fa-facebook-f" /></a>
        <a href="/#"><i className="fab fa-twitter" /></a>
        <a href="/#"><i className="fab fa-google-plus-g" /></a>
        <a href="/#"><i className="fab fa-instagram" /></a>
      </div>
    </div>
    <div className="offcanvas-overly" />
    {/* offCanvas-menu-end */}
  </header>
  )
}

export default HeaderTwo