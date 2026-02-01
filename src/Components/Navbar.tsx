import React, { useEffect, useRef, useState } from 'react';
import '../Style/navbar.sass';

interface NavbarProps {
	aboutRef: React.RefObject<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({ aboutRef }) => {
	const navbarRef = useRef<HTMLDivElement>(null);
	const topNavRef = useRef<HTMLUListElement>(null);
	const [showNavbar, setShowNavbar] = useState<boolean>(true)
	const [navClass, setNavClass] = useState<string>('topnav')

	useEffect(() => {
		const handleScroll = () => {

			if (navbarRef.current && aboutRef.current) {

				const aboutTop = aboutRef.current.offsetTop;
				const distanceBeforeHide = 230
				// *S if the scroll position is between aboutTop and distanceBeforeHide then hide the navbar
				if (window.scrollY > distanceBeforeHide && window.scrollY < aboutTop) {
					// * if showNavbar is true then change it to false ---- this technique save us from the continous use of 'setState' function 
					showNavbar && setShowNavbar(false);
				} else {
					// *  if showNavbar is not true then update the showNavbar to true
					!showNavbar && setShowNavbar(true)
				}
				// * if the scroll position is greater than equals to aboutTop then change the class of the navbar
				topNavRef.current && setNavClass(window.scrollY >= aboutTop ? 'alternate-topnav' : 'topnav')
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [aboutRef, showNavbar]);

	return (

		<header ref={navbarRef} className={!showNavbar ? 'hidden' : 'show'}> {/* if showNavbar is false then class is 'hidden' else 'show'  */}
			<nav className={navClass} ref={topNavRef}>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
