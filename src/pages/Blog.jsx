import React from 'react'
import BlogArea from '../components/blog/BlogArea'
import Breadcrumb from '../components/blog/Breadcrumb'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'

function Blog() {
  return (
    <>
        <HeaderOne/>
            <main>
                <Breadcrumb title={"latest news"} title2={"latest news"}/>
                <BlogArea/>
            </main>
        <Footer/>
    </>
  )
}

export default Blog