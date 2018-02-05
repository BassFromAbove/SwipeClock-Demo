import styles from "./topbar.scss"

import React from "react";
import { Route } from "react-router-dom";

const TopBar = props => (
	<div className={styles.topBar}>
		<Route path="/dashboard" render={props => (
			<div className={styles.topBar__text}>Dashboard</div>
      )} />
		<Route path="/webclock" render={props => (
			<div className={styles.topBar__text}>Webclock</div>
      )} />
		<Route path="/timecard" render={props => (
			<div className={styles.topBar__text}>Time Card</div>
      )} />
		<Route path="/schedule" render={props => (
			<div className={styles.topBar__text}>Schedule</div>
      )} />
	</div>
)

export default TopBar;
