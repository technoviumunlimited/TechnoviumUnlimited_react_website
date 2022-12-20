import React from 'react'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import AreaBg from '../components/headerone/AreaBg'
import Banner from '../components/headerone/Banner'

function IndexOne() {
  return (
    <>
        <HeaderOne/>
            <main>
                <Banner/>
                <AreaBg/>
            </main>
        <Footer/>
    </>
  )
}

export default IndexOne