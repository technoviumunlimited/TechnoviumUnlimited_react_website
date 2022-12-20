import React from 'react'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import AreaBg from '../components/headerone/AreaBg'
import Banner from '../components/headerone/Banner'
import Login from "../components/headerone/Login";

function IndexOne() {
  return (
    <>
        <HeaderOne/>
            <main>
              {/* if () { */}
                <Banner />
                <Login />
                <AreaBg />
              {/* } */}
            </main>
        <Footer/>
    </>
  )
}

export default IndexOne