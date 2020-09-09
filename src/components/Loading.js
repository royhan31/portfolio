import React from "react";

export default function Loading() {
  return(
    <div id="preloader">
  	 <div class="outer">

  		<div class="infinityChrome">
  			<div></div>
  			<div></div>
  			<div></div>
  		</div>


  		<div class="infinity">
  			<div>
  				<span></span>
  			</div>
  			<div>
  				<span></span>
  			</div>
  			<div>
  				<span></span>
  			</div>
  		</div>

  		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo-outer">
  			<defs>
  				<filter id="goo">
  					<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
  					<feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
  					<feBlend in="SourceGraphic" in2="goo" />
  				</filter>
  			</defs>
  		</svg>
  	</div>
  </div>
  )
}
