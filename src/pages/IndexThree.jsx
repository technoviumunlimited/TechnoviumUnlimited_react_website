import React from 'react'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import HeaderOne from '../components/header/HeaderOne'
import Banner from '../components/headerthree/Banner'
import Roadmap from '../components/headerthree/Roadmap'
import ShopArea from '../components/headerthree/ShopArea'
import StemArea from '../components/headerthree/StemArea'
import TeamMember from '../components/headerthree/TeamMember'
import Newsletter from '../components/Newsletter'

function IndexThree() {
  return (
   <>
    <HeaderOne/>
      <main>
        <Banner/>
        <Counter/>
        <TeamMember/>
        <Roadmap/>
        <StemArea/>
        <ShopArea/>
        <Newsletter/>
      </main>
      
      <Footer/>
   </>
  )
}

export default IndexThree