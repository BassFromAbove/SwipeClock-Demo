import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { ping } from "../actions"

class Dashboard extends Component {

	constructor( props ) {
		super( props );
		this.doPing = this.doPing.bind( this );
		this.gotoSchedule = this.gotoSchedule.bind( this );
	}

	doPing() {
		this.props.ping();//.then( whatever => {
			//console.log( whatever );
		//} );
	}

	gotoSchedule() {
		this.props.push( "/schedule" );
	}

	render() {
		return(
			<div>
				<div>Dashboard</div>
				<button onClick={this.doPing}>Ping</button>
				<br/>
				<button onClick={this.gotoSchedule}>Go to schedule</button>
			</div>
		);
	}
}

export default connect( null, { ping, push } )(Dashboard)