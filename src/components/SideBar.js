import styles from "./sidebar.scss";
import fonts from 'font-awesome/css/font-awesome.min.css';

import React from "react";
import { NavLink } from "react-router-dom";
console.log( fonts );
const SideBar = props => (
	<div className={styles.nav}>
		<NavLink
			activeClassName={styles.active}
			className={styles.nav__link}
			to="/dashboard"
		>
			<span className={`${fonts.fa}  ${fonts[ "fa-tachometer" ]}`}></span>
			Dashboard
		</NavLink>
		<NavLink activeClassName={styles.active} className={styles.nav__link} to="/webclock">WebClock</NavLink>
		<NavLink activeClassName={styles.active} className={styles.nav__link} to="/timecard">Time Card</NavLink>
		<NavLink activeClassName={styles.active} className={styles.nav__link} to="/schedule">Schedule</NavLink>
	</div>
)

export default SideBar