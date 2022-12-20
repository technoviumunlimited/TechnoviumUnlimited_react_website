import React from 'react'

function LiveMatch() {
  return (
    <section className="live-match-area live-match-bg pt-120 pb-120">
        <h2 className="live-overlay-text">live</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="live-match-team">
                <img src="assets/img/images/live_match_logo01.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="live-match-time text-center">
                <span>upcoming live matches</span>
                <h2 className="time">08:30</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="live-match-team right">
                <img src="assets/img/images/live_match_logo02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LiveMatch