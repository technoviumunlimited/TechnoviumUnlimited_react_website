import React from 'react'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import Breadcrumb from '../components/innerpage/match/Breadcrumb'
import MatchBlog from '../components/innerpage/match/MatchBlog'


function MatchSingle() {
  return (
   <>
   <HeaderOne/>
        <main>
            <Breadcrumb/>
            <MatchBlog/>
        </main>
   <Footer/>
   
   </>
  )
}

export default MatchSingle