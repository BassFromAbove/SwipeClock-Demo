import styles from "./WebClock.scss"

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setHamburgered, addTime, startTimer, stopTimer } from "../actions";

class WebClock extends Component {

	constructor( props ) {
		super( props )
		this.handleStartTime = this.handleStartTime.bind( this );
		this.handleStopTime = this.handleStopTime.bind( this );
		this.formatDate = this.formatDate.bind( this );
		this.renderTimes = this.renderTimes.bind( this );
	}

	componentDidMount() {
		this.props.setHamburgered( false );
	}

	handleStartTime() {
		this.props.startTimer();
	}

	handleStopTime() {
		this.props.stopTimer();
		this.props.addTime( { in: this.props.startedAt, out: new Date() } )
	}

	formatDate( dateObj ) {
		return ( `${dateObj.getMonth()}/${dateObj.getDate()}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}` );
	}

	renderTimes() {
		const stuff =
			this.props.times.map( ( timeObj, index ) => {
				const startDate = this.formatDate( timeObj.in );
				const stopDate = this.formatDate( timeObj.out );
				return (
					<div key={`${timeObj.in}${timeObj.out}${index}`} className="grid__row">
						<span className={`grid__cell`}>{startDate}</span>
						{' '}
						<span className={`grid__cell`}>{stopDate}</span>
					</div>
				) }
			)
		return( stuff );
	}

	render() {
		const times = this.renderTimes();
		const startDate = this.props.started && this.props.startedAt
			? this.formatDate( this.props.startedAt )
			: '';

		return(
			<div className={styles.webclock}>
				<div>
				{this.props.times.length ?
					<button style={{ marginRight: "10px" }}>Save</button>
				: ''
				}
				{this.props.started ?
					<div style={{ display: "inline-block" }}>
						<button onClick = {this.handleStopTime}>Stop</button>
						{' '} started at:
						<span className={styles[ "webclock__time-text" ]}>{startDate}</span>
					</div>
				:
					<button onClick = {this.handleStartTime}>Start</button>
				}
				</div>
				{this.props.times.length ?
					<div className={styles[ "webclock__time-list" ]}>
						<div className="grid__row--header">
							<div className={`grid__cell`}>Start</div>
							<div className={`grid__cell`}>Stop</div>
						</div>
						{times}
					</div>
				: ''
				}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	times: state.webclock.times,
	started: state.webclock.started,
	startedAt: state.webclock.startTime
})

export default connect( mapStateToProps, { setHamburgered, addTime, startTimer, stopTimer } )( WebClock )
