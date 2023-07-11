import '../Style/about.sass'
const About = () => {
	return (
		<section id='about'>
			<div className='container'>
				<h2 className='title'>About</h2>

				<div className='about-me'>
					<h3>Profile</h3>
					<div className='profile'>

						<figure>
							<img className='my-photo' src="/public/images/my_photo.jpg" alt="" />
							<figcaption>
								I'm an extremely ambitious and pasionate software engineer. I am proficient in developing responsive web application using HTML5, CSS3, Javascript, ReactJs, Sass, Tailwindcss. I have deployed my works on Github Pages and Netlify. I use vite.js, which is several times faster then the old and slow webpack. I am confident than I can take a design and convert it into a pixel-perfect web application. I can consume backend APIs using axios and integret them in the Frontend side.
								<br /> <br />
								Additionaly I have knowledge of Python 3 programming language. I have worked on web scrapping project using BeautifulSoup library. I have sound knowledge of Agile methodology and CI/CD process. I am also procient in version control using git and github, which make me able to work effectively in a team. I prefer Tailwindcss framework for styling web pages as it gives me the freedom with convinence to style responsive web pages. Although I am also proficient with Sass. I familiar with Browser Developer Tools, which I use on a daily basis.
							</figcaption>
						</figure>
					</div>
					<h3>Education</h3>
					<div className='education'>
						<div>
							<h4>Bankura University <span className='year'>(2020-2023)</span></h4>
							<p className='course'>B.A - English Honors</p>
						</div>
						<div>
							<h4>Kamalpur Netaji High School <span className='year'>(2020)</span></h4>
							<p className='course'>Arts</p>
						</div>
					</div>

					<a href='/public/Gain Prasad Kar Resume.pdf' className="resume" download>Download Resume</a>
				</div>
			</div>
		</section>
	)
}

export default About