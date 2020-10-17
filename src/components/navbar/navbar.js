import React, {useState, useEffect} from 'react';
import './navbar.css';

import { Link, useHistory } from 'react-router-dom';

const tabs = ['Homepage', 'Treatment', 'Resources', 'Medicine', 'Profile'];
const paths = ['/', '/treatment', '/resources', '/medicine', '/profile'];
const leftLogo = "https://2019.igem.org/wiki/images/3/32/T--Washington--HLogo2.png";
const rightLogo = "https://2019.igem.org/wiki/images/3/32/T--Washington--HLogo2.png";

const NavBar = () => {
	const [tab, setTab] = useState(paths.indexOf(window.location.hash.substring(1)));
	let links = [];
	const history = useHistory();

	useEffect(() => {
		return history.listen(() => { 
			setTab(paths.indexOf(window.location.hash.substring(1)));
		}) 
	}, [history]);

	for (let i = 0; i < tabs.length; i++) {
		links.push(
		<Link
			className='nav-tab'
			to={paths[i]}
			style={{borderBottom: tab === i ? '0.75vw solid #4B2E83' : 'none'}}
		>
			{tabs[i]}
		</Link>)
	}

	return (
		<div id='nav-bar-container'>
			<img id='logo-left' className='logo' src={leftLogo} alt='Logo'/>
			{links}
			<img id='logo-right' className='logo' src={rightLogo} alt='Logo'/>
		</div>
	)
}

export default NavBar;