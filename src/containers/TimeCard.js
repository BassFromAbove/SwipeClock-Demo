import styles from "./TimeCard.scss";

import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, QUERY_TYPE, setHamburgered } from "../actions";
import TimeCardList from "../components/TimeCardList";

class TimeCard extends Component {

	constructor( props ) {
		super( props );
	}

	componentWillMount() {
		this.props.getData( QUERY_TYPE.userTimeSummary );
	}

	componentDidMount() {
		this.props.setHamburgered( false );
	}

	render() {
		return(
			<div className={styles.timecard}>
				<TimeCardList
					data={this.props.data}
					isGettingData={this.props.isGettingData}
					getDataFailed={this.props.getDataFailed}
				/>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => ( {
	data: state.data.timeSummary,
	isGettingData: state.isGettingData,
	getDataFailed: state.getDataFailed
} )

export default connect( mapStateToProps, { getData, setHamburgered } )(TimeCard)