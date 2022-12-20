import React,{ useState } from 'react'
import Menu from "./Menu";
function MymatchArea() {
  const [items, setItems] =  useState(Menu);
  const filterItem = (categItem)=>{
    const updateItems = Menu.filter((curElem)=>{
      return curElem.category === categItem; 
    })
    setItems(updateItems);
  }
  return (
    <section className="my-match-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title title-style-two text-center mb-60">
            <h2 className="title">see <span>my</span> MATCHES</h2>
          </div>
        </div>
      </div>
      <div className="my-match-inner">
        <div className="row">
          <div className="col-12" >
            <ul className="nav nav-tabs match-menu" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="active" onClick={()=> filterItem("matches")}>ALL MATCHES UP</button>
              </li>
              <li className="nav-item" role="presentation">
                <button onClick={()=> filterItem("comming")}>COMING MATCHES</button>
              </li>
              <li className="nav-item" role="presentation">
                <button onClick={()=> filterItem("latest")}>LATEST RESULTS</button>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="all-tab">
              <div className="row">
                {
                  items.map((elem)=>{
                    const {id,png1,png2,png3,png4,png5,h5,span} = elem;
                    return(
                      <div className="col-12" key={id}>
                  <div className="my-match-wrap">





                    <div className="my-match-box-wrap wow fadeInDown" data-wow-delay=".2s">
                      <img src={png1} alt="" className="match-box-bg" />
                      <ul>
                        <li>
                          <div className="my-match-team">
                            <div className="team-one">
                              <a href="/#"><img src={png2} alt="" /></a>
                            </div>
                            <div className="vs">
                              <img src={png3} alt="" />
                            </div>
                            <div className="team-one">
                              <a href="/#"><img src={png4} alt="" /></a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="my-match-info">
                            <a href="https://www.twitch.tv/shroud" target="blank" className="live-btn">Live MATCHES</a>
                            <h5>{h5}</h5>
                            <span>{span}</span>
                          </div>
                        </li>
                        <li>
                          <a href="https://www.twitch.tv/shroud" target="blank" className="watch-stream"><img src={png5} alt="" /> watch stream</a>
                        </li>
                      </ul>
                    </div>



              
                  </div>
                </div>
                    )
                  })
                }
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MymatchArea