import React,{useEffect, useState} from 'react'
import Clock from "../components/Clock"

function Counter() {
  const[timerDays,setTimerDays]=useState();

  const[timerHours,setTimerHours]=useState();

  const[timerMinutes,setTimerMinutes]=useState();

  const[timerSeconds,setTimerSeconds]=useState();
  
  let interval;
  const startTimer = () => {

    var countDownDate = new Date("Jan 20, 2023 15:37:25").getTime();

    interval = setInterval(() => {


      var now = new Date().getTime();

      var distance = countDownDate - now;


      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if(distance < 0){
        //stop timer
        clearInterval(interval.current);
  
      }else{
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
  
      }
    }, 1000);
 
  };
  useEffect(()=>{

    startTimer();
  });
  return (
    <section className="countdown-area-two countdown-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title title-style-three text-center mb-60">
                <h2 className="title">Time Until Pre-Sale</h2>
                <span>Upcoming Countdown</span>
                      <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="countdown-wrap text-center">
                <div id="countdown-gampang" />
                <img src="assets/img/images/countdown_img.png" alt="" />
                <p>COLLECTIONS love to online gaming platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Counter