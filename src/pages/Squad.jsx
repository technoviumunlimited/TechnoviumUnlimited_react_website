import React from 'react'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import Breadcrumb from '../components/innerpage/squad/Breadcrumb'
import SquadSingle from '../components/innerpage/squad/SquadSingle'

function Squad() {
  return (
   <>
   <HeaderOne/>
        <main>
            <Breadcrumb/>
            <SquadSingle/>
        </main>
   <Footer/>
   </>
  )
}

export default Squad