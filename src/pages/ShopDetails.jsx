import React from 'react'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import Breadcrumb from '../components/innerpage/shop/Breadcrumb'
import Shopdetails from '../components/innerpage/shop/Shopdetails'

function ShopDetails() {
  return (
   <>
    <HeaderOne/>
        <main>
            <Breadcrumb title={"shop details"} title2={"shop details"}/>
            <Shopdetails/>
        </main>
    <Footer/>
   </>
  )
}

export default ShopDetails