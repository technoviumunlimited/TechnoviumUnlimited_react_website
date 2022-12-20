import React from 'react'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import Breadcrumb from '../components/innerpage/shop/Breadcrumb'
import OurShop from '../components/innerpage/shop/OurShop'

function Shop() {
  return (
    <>
    <HeaderOne/>
        <main>
            <Breadcrumb title={'our shop'} title2={"our shop"}/>
            <OurShop/>
        </main>
    <Footer/>
    </>
  )
}

export default Shop