import styles from "./schedule.scss"

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData, QUERY_TYPE, setHamburgered } from "../actions";
import ScheduleList from "../components/ScheduleList";

class Schedule extends Component {

	constructor( props ) {
		super( props );
	}

	componentWillMount() {
		this.props.getData( QUERY_TYPE.userTimeSummary );
		this.props.getData( QUERY_TYPE.userScheduleSummary );
		this.props.getData( QUERY_TYPE.jobs );
	}

	render() {
		return(
			<div className={styles.schedule}>
				<ScheduleList
					time={this.props.data.time}
					schedules={this.props.data.scheduleSummary}
					jobs={this.props.data.jobs}
					isGettingData={this.props.isGettingData}
					getDataFailed={this.props.getDataFailed}
				/>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => ( {
	data: state.data,
	isGettingData: state.isGettingData,
	getDataFailed: state.getDataFailed
} )

export default connect( mapStateToProps, { getData, setHamburgered } )(Schedule)