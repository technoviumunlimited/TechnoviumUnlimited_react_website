import React from 'react'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import Areabg from '../components/tournament/Areabg'
import Breadcrumb from '../components/tournament/Breadcrumb'
import MymatchArea from '../components/tournament/MymatchArea'

function Tournament() {
  return (
    <>
    <HeaderOne/>
        <main>
            <Breadcrumb/>
            <Areabg/>
            <MymatchArea/>
        </main>
    <Footer/>    
    </>
  )
}

export default Tournament