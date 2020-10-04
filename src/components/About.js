import React from 'react';

export default function About(){
  return(
    <section id="about">

		<div className="container">
			<h2 className="section-title wow fadeInUp">About Me</h2>

			<div className="spacer" data-height="60"></div>

			<div className="row">

				<div className="col-md-3">
					<div className="text-center text-md-left">
						<img src={require("../images/roy.png")} alt="Bolby" />
					</div>
					<div className="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				<div className="col-md-9 triangle-left-md triangle-top-sm">
					<div className="rounded bg-dark shadow-dark padding-30">
						<div className="row">
							<div className="col-md-6">
								<p className="text-justify">Saya Izzatur Royhan, seorang fresh graduate dan seorang backend developer yang berfokus pada
                Laravel, React js dan Express js.
                </p>
								<div className="mt-3">
									<a href={require("../files/Izzatur Royhan.pdf")} rel="noopener noreferrer" target="_blank" className="btn btn-default">Download CV</a>
								</div>
								<div className="spacer d-md-none d-lg-none" data-height="30"></div>
							</div>
							<div className="col-md-6">
								<div className="skill-item">
									<div className="skill-info clearfix">
										<h4 className="float-left mb-3 mt-0">Back-End Developer</h4>
										<span className="float-right">80%</span>
									</div>
									<div className="progress">
										<div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" data-color="#FFD15C">
										</div>
									</div>
									<div className="spacer" data-height="20"></div>
								</div>
								<div className="skill-item">
									<div className="skill-info clearfix">
										<h4 className="float-left mb-3 mt-0">Web Developer</h4>
										<span className="float-right">70%</span>
									</div>
									<div className="progress">
										<div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70" data-color="#FF4C60">
										</div>
									</div>
									<div className="spacer" data-height="20"></div>
								</div>

								<div className="skill-item">
									<div className="skill-info clearfix">
										<h4 className="float-left mb-3 mt-0">Front-End Developer</h4>
										<span className="float-right">60%</span>
									</div>
									<div className="progress">
										<div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60" data-color="#6C6CE5">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="spacer" data-height="75"></div>
      <div className="row justify-content-center">
				<div className="col-md-2 col-sm-2 col-4 mb-4 text-center">
					<div className="fact-item">
					     <i className="fab fa-js-square fa-3x"></i>
					</div>
				</div>
				<div className="col-md-2 col-sm-2 col-4 mb-4 text-center">
					<div className="fact-item">
					     <i className="fab fa-php fa-3x"></i>
					</div>
				</div>
				<div className="col-md-2 col-sm-2 col-4 mb-4 text-center">
					<div className="fact-item">
					     <i className="fab fa-react fa-3x"></i>
					</div>
				</div>
				<div className="col-md-2 col-sm-2 col-4 text-center">
					<div className="fact-item">
					     <i className="fab fa-laravel fa-3x"></i>
					</div>
				</div>
        <div className="col-md-2 col-sm-2 col-4 text-center">
					<div className="fact-item">
					    <i className="fas fa-database fa-3x"></i>
					</div>
				</div>

			</div>

		</div>

	</section>
  )
}
