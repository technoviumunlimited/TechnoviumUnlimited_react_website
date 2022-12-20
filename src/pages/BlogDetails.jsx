import React from 'react'
import Breadcrumb from '../components/blog/Breadcrumb'
import Details from '../components/blog/Details'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'

function BlogDetails() {
  return (
  <>
    <HeaderOne/>
    <main>
        <Breadcrumb title={'news details'} title2={"news details"}/>
        <Details/>
    </main>
    <Footer/>
  </>
  )
}

export default BlogDetails