import React from 'react';

export default function Haeder(){
  return(
    <header className="desktop-header-3 fixed-top">
       <div className="container">
         <nav className="navbar navbar-expand-lg navbar-dark">
             <a className="navbar-brand" href="index-3-dark.html"><img src="portfolio/images/logo.svg" alt="Royhan" /></a>
             <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
             <div className="collapse navbar-collapse" id="navbarNavDropdown">
                 <ul className="navbar-nav ml-auto scrollspy">
                     <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                     <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                     <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                     <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
                     <li className="nav-item"><a href="#works" className="nav-link">Works</a></li>
                     <li className="nav-item"><a href="#blog" className="nav-link">Blog</a></li>
                     <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                 </ul>
             </div>
         </nav>
       </div>
   </header>
  )
}
