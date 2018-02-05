import styles from "./sidebar.scss";
import fonts from 'font-awesome/css/font-awesome.min.css';

import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter, NavLink } from "react-router-dom";
import { setHamburgered } from "../actions/"

class SideBar extends Component {
	constructor( props ) {
		super( props );
		this.clickBurger = this.clickBurger.bind( this );
	}

	clickBurger() {
		this.props.setHamburgered( !this.props.hamburgered );
	}

	render() {
		const extraClassnames = this.props.hamburgered ? styles[ "nav__panel--hamburgered" ] : "";
		return (
		<div className={styles.nav}>
			<button
				className={`${styles.nav__hamburger} ${fonts.fa} ${fonts[ "fa-bars" ]}`}
				onClick={this.clickBurger}
				>
			</button>
			<div className={`${styles.nav__panel} ${extraClassnames}`}>
				<div className={styles[ "nav__panel--padding" ]}></div>
				<NavLink
					activeClassName={`${styles[ "nav__link--active" ]}`}
					className={styles.nav__link}
					to="/dashboard"
				>
					<span className={`${styles.nav__icon} ${fonts.fa} ${fonts[ "fa-tachometer" ]}`}></span>
					<span className={styles.nav__text}>Dashboard</span>
				</NavLink>

				<NavLink
					activeClassName={styles[ "nav__link--active" ]}
					className={styles.nav__link}
					to="/webclock"
				>
					<span className={`${styles.nav__icon} ${fonts.fa} ${fonts[ "fa-clock-o" ]}`}></span>
					<span className={styles.nav__text}>WebClock</span>
				</NavLink>

				<NavLink
					activeClassName={styles[ "nav__link--active" ]}
					className={styles.nav__link}to="/timecard"
				>
					<span className={`${styles.nav__icon} ${styles[ "nav__icon--stack" ]}`}>
						<span className={`${styles.nav__icon} ${fonts[ "fa-stack-1x" ]} ${fonts.fa} ${fonts[ "fa-square" ]}`}></span>
						<span className={`${styles[ "nav__icon--fs50" ]} ${fonts[ "fa-stack-1x" ]} ${fonts["fa-inverse" ]} ${fonts.fa} ${fonts[ "fa-clock-o" ]}`}></span>
					</span>
					<span className={styles.nav__text}>Time Card</span>
				</NavLink>
				<NavLink
					activeClassName={styles[ "nav__link--active" ]}
					className={styles.nav__link}
					to="/schedule"
				>
					<span className={`${styles.nav__icon} ${fonts.fa} ${fonts[ "fa-calendar" ]}`}></span>
					<span className={styles.nav__text}>Schedule</span>
				</NavLink>
			</div>
		</div>
		)
	}
}

const mapStateToProps = state => {
	return ( {
		hamburgered: state.hamburgered
	} )
}

export default withRouter( connect( mapStateToProps, { setHamburgered } )( SideBar ) )