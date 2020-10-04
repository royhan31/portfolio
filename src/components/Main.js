import React from "react";
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';

export default function Main(){
  return(
    <main className="content-3">

     <Home />
     <About />
     <Experience />
     <Work />
     <Contact />
     <footer className="footer">
       <div className="container">
           <span className="copyright">© 2020 Izzatur Royhan</span>
       </div>
   </footer>
   </main>
  )
}
