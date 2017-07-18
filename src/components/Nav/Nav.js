import React from 'react'

import './Nav.css'

export default function() {
   return (
      <div className="Nav">
         <div className="Nav-header">
            <div className="Nav-logo"></div>
            <div className="Nav-title">Brian's App</div>
         </div>
         <ul className="Nav-navlist">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
         </ul>
      </div>
   )
}