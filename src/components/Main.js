import React from "react";
import Home from './Home';
import About from './About';
import Experience from './Experience';

export default function Main(){
  return(
    <main className="content-3">

     <Home />
     <About />
     <Experience />
     <footer class="footer">
       <div class="container">
           <span class="copyright">© 2020 Izzatur Royhan</span>
       </div>
   </footer>
   </main>
  )
}
