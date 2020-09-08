import React from 'react';

export default function Experience(){
  return(
    <section id="experience">

		<div className="container">

			<h2 className="section-title wow fadeInUp">Experience</h2>

			<div className="spacer" data-height="60"></div>

			<div className="row">

				<div className="col-md-6">
					<div className="timeline edu bg-dark rounded shadow-dark padding-30 overflow-hidden">
						<div className="timeline-container wow fadeInUp">
							<div className="content">
								<span className="time">2020</span>
								<h3 className="title">Politeknik Harapan Bersama Tegal</h3>
								<p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
							</div>
						</div>

						<span className="line"></span>

					</div>

				</div>

				<div className="col-md-6">
					<div className="spacer d-md-none d-lg-none" data-height="30"></div>
					<div className="timeline exp bg-dark rounded shadow-dark padding-30 overflow-hidden">

						<div className="timeline-container wow fadeInUp">
							<div className="content">
								<span className="time">2018</span>
								<h3 className="title">Web Developer</h3>
								<p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
							</div>
						</div>

						<div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
							<div className="content">
								<span className="time">2019</span>
								<h3 className="title">Back-End Developer</h3>
								<p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
							</div>
						</div>

						<div className="timeline-container wow fadeInUp" data-wow-delay="0.4s">
							<div className="content">
								<span className="time">2019</span>
								<h3 className="title">Front-End Developer</h3>
								<p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
							</div>
						</div>

						<span className="line"></span>

					</div>

				</div>

			</div>

		</div>

    <div className="spacer" data-height="60"></div>

	</section>
  )
}
