import React, { useEffect, useRef, useState } from 'react';
import '../Style/navbar.sass';

interface NavbarProps {
	aboutRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ aboutRef }) => {
	const navbarRef = useRef<HTMLDivElement>(null);
	const topNavRef = useRef<HTMLUListElement>(null);
	const [showNavbar, setShowNavbar] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {

			if (navbarRef.current && aboutRef.current) {

				const navbarHeight = navbarRef.current.offsetHeight;
				const aboutTop = aboutRef.current.offsetTop;
				const distanceBeforeHide = 350
				// if the scroll position is between aboutTop and aboutTop - distanceBeforeHide then hide the navbar
				if (window.scrollY + navbarHeight > aboutTop - distanceBeforeHide && window.scrollY + navbarHeight < aboutTop) {
					setShowNavbar(false);
				} else {
					setShowNavbar(true);
				}
				if (window.scrollY + navbarHeight >= aboutTop && topNavRef.current) {
					topNavRef.current.className = 'alternate-topnav'
				} else if (window.scrollY + navbarHeight < aboutTop && topNavRef.current) {
					topNavRef.current.className = 'topnav'
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [aboutRef]);

	return (

		<header ref={navbarRef} style={!showNavbar ? { display: 'none' } : { display: 'block' }}> {/* if showNavbar is false then display : none to hide the navbar  */}
			<nav className="topnav" ref={topNavRef}>
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
