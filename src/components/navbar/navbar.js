import React, {useState, useEffect} from 'react';
import './navbar.css';

import { Link, useHistory } from 'react-router-dom';
import icon1 from './icons/1.jpg';
import icon2 from './icons/2.jpg';
import icon3 from './icons/3.jpg';
import icon4 from './icons/4.jpg';

const tabs = ['Homepage', 'Treatment', 'Resources', 'Medicine', 'Crisis', 'Profile'];
const paths = ['/', '/treatment', '/resources', '/medicine', '/crisis', '/profile'];

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
			<img id='logo-left' className='logo' src={icon1} alt='Logo'/>
			{links}
			<img id='logo-right' className='logo' src={icon4} alt='Logo'/>
		</div>
	)
}

export default NavBar;