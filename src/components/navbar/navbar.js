import React, {useState, useEffect} from 'react';
import './navbar.css';

import { Link, useHistory } from 'react-router-dom';
import icon from './icons/icon.png';
import crisis_icon from '../crisis/crisis_icon.png';

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
			style={{borderBottom: tab === i ? '0.75vw solid #EE7804' : 'none'}}
		>
			{tabs[i]}
		</Link>)
	}

	return (
		<div id='nav-bar-container'>

			<a href="/Dubhacks2020#">
				<img id='logo-left' className='logo' src={icon} alt='Logo'/>
			</a>
			{links}
			<a href="/Dubhacks2020#/crisis" style={{marginTop: "20px", marginRight: "20px"}}>
				<img src={crisis_icon} width="60" height="60"/>
			</a>
		</div>
	)
}

export default NavBar;