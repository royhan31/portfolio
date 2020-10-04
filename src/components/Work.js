import React from 'react';

export default function Work(){
  return(
    <section id="works">
    		<div className="container">

    			<h2 className="section-title wow fadeInUp">Recent works</h2>

    			<div className="spacer" data-height="60"></div>

    			<ul className="portfolio-filter list-inline wow fadeInUp">
    				<li className="current list-inline-item" data-filter="*">Semua</li>
    				<li className="list-inline-item" data-filter=".web">Web</li>
    				<li className="list-inline-item" data-filter=".android">Android</li>
    			</ul>

    			<div className="pf-filter-wrapper">
      				<select className="portfolio-filter-mobile">
      					<option value="*">Semua</option>
      					<option value=".web">Web</option>
      					<option value=".android">Android</option>
      				</select>
    			</div>

    			<div className="row portfolio-wrapper">

    				<div className="col-md-4 col-sm-12 grid-item web">
    					<a href="#small-dialog-fendap" className="work-content">
    						<div className="portfolio-item rounded shadow-dark">
    							<div className="details">
    								<span className="term">Web</span>
    								<h4 className="title">Fendap Bengkulu</h4>
    							</div>
    							<div className="thumb">
    								<img src={require("../images/fendap-web.png")} alt="Portfolio-title" />
    								<div className="mask"></div>
    							</div>
    						</div>
    					</a>
              <div id="small-dialog-fendap" className="white-popup zoom-anim-dialog mfp-hide">
  						<img src={require("../images/fendap-web.png")} alt="Title" />
    						<h2>Fendap Bengkulu</h2>
    						  <p>Fendap Bengkulu adalah sebuah aplikasi untuk memberikan informasi mengenai Wisata, Budaya, Kuliner, Kerajinan,
                  dan Perayaan yang berada di Bengkulu</p>
					     </div>
    				</div>

          <div className="col-md-4 col-sm-12 grid-item android">
  					<a href="#gallery-1" className="gallery-link">
  						<div className="portfolio-item rounded shadow-dark">
  							<div className="details">
  								<span className="term">Android</span>
  								<h4 className="title">Fendap Bengkulu</h4>
  								<span className="more-button"><i className="icon-picture"></i></span>
  							</div>
  							<div className="thumb">
  								<img src={require("../images/fendap-1.jpg")} alt="Portfolio-title" />
  								<div className="mask"></div>
  							</div>
  						</div>
  					</a>
  					<div id="gallery-1" className="gallery mfp-hide">
  						<a  href={require("../images/fendap-1.jpg")}> </a>
  						<a href={require("../images/fendap-2.jpg")}> </a>
  					</div>
  				</div>
          <div className="col-md-4 col-sm-12 grid-item web">
            <a href="#small-dialog-corona" className="work-content">
              <div className="portfolio-item rounded shadow-dark">
                <div className="details">
                  <span className="term">Web</span>
                  <h4 className="title">Corona App</h4>
                </div>
                <div className="thumb">
                  <img src={require("../images/corona.png")} alt="Portfolio-title" />
                  <div className="mask"></div>
                </div>
              </div>
            </a>
            <div id="small-dialog-corona" className="white-popup zoom-anim-dialog mfp-hide">
            <img src={require("../images/corona.png")} alt="Title" />
              <h2>Corona App</h2>
              <p>Corona App adalah aplikasi yang berisi tentang informasi perkembangan Covid-19 di indonesia dan di dunia.</p>
              <a href="https://corona.plug-in.web.id/" rel="noopener noreferrer" target="_blank" className="btn btn-default">Lihat</a>
             </div>
          </div>

    			</div>

    		</div>
    	</section>
  )
}
