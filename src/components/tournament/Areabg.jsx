import React from 'react'
import Tournament from '../headerone/Tournament'
import LiveStream from './LiveStream'

function Areabg() {
  return (
    <div className="tournament-area-bg">
        <LiveStream/>
        <Tournament/>
    </div>
  )
}

export default Areabg