import React from 'react'

export default function Contact(){
  return(
    <section id="contact">

		<div className="container mb-3 mt-5">
			<h2 className="section-title wow fadeInUp">Contact</h2>

			<div className="spacer" data-height="60"></div>

			<div className="testimonials-wrapper">
				<div className="testimonial-item text-center mx-auto">
					<div className="thumb mb-3 mx-auto">
						<img src={require("../images/roy.png")} alt="customer-name" />
					</div>
					<h4 className="mt-3 mb-0">Izzatur Royhan</h4>
					<span className="subtitle">Back-End Developer</span>
					<div className="bg-dark padding-30 shadow-dark rounded triangle-top position-relative mt-4">
            <div>
              <a href="https://wa.link/5dpicd" rel="noopener noreferrer" target="_blank" className="btn btn-default btn-sm mr-2 ">
              <i className="fab fa-whatsapp fa-lg" aria-hidden="true"> </i>
              </a> 083861356658
            </div>
					</div>
				</div>

			</div>



		</div>

	</section>
  )
}
