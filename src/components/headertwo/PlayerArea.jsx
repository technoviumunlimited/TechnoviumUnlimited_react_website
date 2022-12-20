import React from 'react'

function PlayerArea() {
  return (
    <section className="give-player-area give-player-bg pt-110">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title title-style-two text-center mb-70">
            <h2 className="title">What we give players</h2>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-center justify-content-md-between justify-content-lg-around">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="gp-item mb-70 wow fadeInUp" data-wow-delay=".2s">
            <div className="gp-item-top flex-md-row-reverse">
              <img src="assets/img/icon/gp_icon01.png" alt="" />
              <h4 className="title">VR Development</h4>
            </div>
            <div className="gp-content text-end">
              <p>Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum</p>
            </div>
          </div>
          <div className="gp-item mb-70 wow fadeInUp" data-wow-delay=".4s">
            <div className="gp-item-top flex-md-row-reverse">
              <img src="assets/img/icon/gp_icon02.png" alt="" />
              <h4 className="title">Career in Gaming</h4>
            </div>
            <div className="gp-content text-end">
              <p>Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum</p>
            </div>
          </div>
          <div className="gp-item mb-70 wow fadeInUp" data-wow-delay=".6s">
            <div className="gp-item-top flex-md-row-reverse">
              <img src="assets/img/icon/gp_icon03.png" alt="" />
              <h4 className="title">Activision Offering</h4>
            </div>
            <div className="gp-content text-end">
              <p>Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-none d-xl-block">
          <div className="gp-img">
            <img src="assets/img/images/give_player.png" alt="" />
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="gp-item right mb-70 wow fadeInUp" data-wow-delay=".2s">
            <div className="gp-item-top">
              <img src="assets/img/icon/gp_icon04.png" alt="" />
              <h4 className="title">Active Team Members</h4>
            </div>
            <div className="gp-content">
              <p>Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum</p>
            </div>
          </div>
          <div className="gp-item right mb-70 wow fadeInUp" data-wow-delay=".4s">
            <div className="gp-item-top">
              <img src="assets/img/icon/gp_icon05.png" alt="" />
              <h4 className="title">Design &amp; Strategy</h4>
            </div>
            <div className="gp-content">
              <p>Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum</p>
            </div>
          </div>
          <div className="gp-item right mb-70 wow fadeInUp" data-wow-delay=".6s">
            <div className="gp-item-top">
              <img src="assets/img/icon/gp_icon06.png" alt="" />
              <h4 className="title">Weapon Blueprints, 2XP,</h4>
            </div>
            <div className="gp-content">
              <p>Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PlayerArea