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
								<p>DIV Teknik Informatika</p>
							</div>
						</div>
						<div className="timeline-container wow fadeInUp" data-wow-delay="0.2s">
							<div className="content">
								<span className="time">2015</span>
								<h3 className="title">SMK N 01 Brebes</h3>
								<p>Teknik Komputer dan Jaringan</p>
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
								<h3 className="title">DPMPTSP (Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu) Kab. Brebes</h3>
								<p>Sebagai pegawai lepas di DPMPTSP (Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu) Kab. Brebes sebagai Web Developer (Laravel) membuat sebuah aplikasi survei
                untuk kepuasan pelanggan.</p>
							</div>
						</div>

						<div className="timeline-container wow fadeInUp">
							<div className="content">
								<span className="time">2018</span>
								<h3 className="title">GeekGarden Yogyakarta</h3>
								<p>Magang di Software House GeekGarden Yogyakarta sebagai Web Developer (Laravel).</p>
							</div>
						</div>

						<div className="timeline-container wow fadeInUp">
							<div className="content">
								<span className="time">2020</span>
								<h3 className="title">DISKOMINFO Kab. Brebes</h3>
								<p>Sebagai pegawai lepas di DISKOMINFO Kab. Brebes sebagai Web Developer (Laravel) untuk membantu dalam pendataan pendatang
                yang masuk ke kabupaten Brebes.</p>
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
