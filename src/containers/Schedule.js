import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class Schedule extends Component {

	constructor( props ) {
		super( props );
		this.gotoDashboard = this.gotoDashboard.bind( this );
	}

	gotoDashboard() {
		this.props.push( "/dashboard" );
	}

	render() {
		return(
			<div>
				<div>Schedule</div>
				<button onClick={this.gotoDashboard}>Go to dashboard</button>
			</div>
		);
	}
}

export default connect( null, { push } )(Schedule)