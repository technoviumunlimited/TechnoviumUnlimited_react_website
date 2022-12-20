import React from 'react'
import Breadcrumb from '../components/contact/Breadcrumb'
import ContactArea from '../components/contact/ContactArea'
// import ContactMap from '../components/contact/ContactMap.'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import Newsletter from '../components/Newsletter'

function Contact() {
  return (
   <>
    <HeaderOne/>
    <main>
        <Breadcrumb/>
        <ContactArea/>
        <Newsletter/>
        {/* <ContactMap/> */}
    </main>
    <Footer/>
   </>
  )
}

export default Contact