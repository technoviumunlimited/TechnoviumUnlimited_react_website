import React,{ Fragment } from 'react'
import "./clock.css"

const Clock = ({timerDays,timerHours, timerMinutes, timerSeconds}) => {
  return (
    <Fragment>
        <section className='timer container'>
            <div className='timer row'>
                <div className='col-12 clock '>

                    <div className='box'>
                        <div className='percent'>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className='ttt'>
                        <h2>{timerDays}</h2>
                       
                       </div>
                        </div>
                       
                      <small>days</small>
                    
                    </div>
                    <div className='box'>
                        <div className='percent'>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>

                       <div className='ttt'>
                       <h2>{timerHours}</h2>
                      
                       </div>
                        </div>
                      
                       <small>hours</small>
                    
                    </div>
                    <div className='box'>
                        <div className='percent'>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className='ttt'>
                       <h2>{timerMinutes}</h2>
                       </div>
                        </div>
                       
                      
                        <small>minutes</small>
                    
                    </div>
                    <div className='box'>
                        <div className='percent'>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className='ttt'>
                        <h2>{timerSeconds}</h2>
                       </div>
                        </div>
                        
                        
                        <small>seconds</small>
                    
                    </div>
                    
                    
                   
                </div>

            </div>

        </section>
    </Fragment>
  );
};
Clock.defaultProps={
    timerDays:0,
    timerHours:0,
    timerMinutes:0,
    timerSeconds:0,
};

export default Clock