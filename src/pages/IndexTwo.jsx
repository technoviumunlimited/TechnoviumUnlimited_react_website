import React from 'react'
import Footer from '../components/Footer'
import HeaderTwo from '../components/header/HeaderTwo'
import Areabg from '../components/headertwo/Areabg'
import Banner from '../components/headertwo/Banner'
import GalleryArea from '../components/headertwo/GalleryArea'
import LiveMatch from '../components/headertwo/LiveMatch'
import PlayerArea from '../components/headertwo/PlayerArea'
import ShopArea from '../components/headertwo/ShopArea'
import Newsletter from '../components/Newsletter'

function IndexTwo() {
  return (
    <>
        <HeaderTwo/>
            <main>


                <Banner/>
                <Areabg/>
                <GalleryArea/>
                <PlayerArea/>
                <LiveMatch/>
                <ShopArea/>
                <Newsletter/>

            </main>

        <Footer/>
    
    </>
  )
}

export default IndexTwo