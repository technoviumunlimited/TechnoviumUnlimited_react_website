import React from 'react'
import AboutArea from '../components/aboutus/AboutArea'
import Areabg from '../components/aboutus/Areabg'
import Breadcrumb from '../components/aboutus/Breadcrumb'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'

function AboutUs() {
  return (
    <>
        <HeaderOne/>
            <main>
                <Breadcrumb/>
                <Areabg/>
                <AboutArea/>
            </main>
        <Footer/>
    
    </>
  )
}

export default AboutUs