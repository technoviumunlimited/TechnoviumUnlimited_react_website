
import { useEffect } from 'react';
// import $ from "jquery";
import { Routes, Route } from "react-router-dom";

import IndexThree from './pages/IndexThree';
import IndexTwo from './pages/IndexTwo';
import IndexOne from './pages/IndexOne';
import AboutUs from './pages/AboutUs';
import Tournament from './pages/Tournament';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import MatchSingle from './pages/MatchSingle';
import Squad from './pages/Squad';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';
import $ from "jquery";


function App() {

  useEffect(()=>{

    function preloader() {
      $('#preloader').delay(0).fadeOut();
    };
    
    $(window).on('load', function () {

      preloader();
     
    });
    
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexOne/>}/>
        <Route path="index-2" element={<IndexTwo/>}/>
        <Route path="index-3" element={<IndexThree/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="tournaments" element={<Tournament/>}/>
        <Route exact path="contact" element={<Contact/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="blog-details" element={<BlogDetails/>}/>
        <Route path="match-single" element={<MatchSingle/>}/>
        <Route path="our-squad" element={<Squad/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="shop-details" element={<ShopDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
