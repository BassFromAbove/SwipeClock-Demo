import styles from "./Dashboard.scss";

import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, QUERY_TYPE, setHamburgered } from "../actions";
import DashboardList from "../components/DashboardList";

class Dashboard extends Component {

	constructor( props ) {
		super( props );
	}

	componentWillMount() {
		this.props.getData( QUERY_TYPE.time );
		this.props.getData( QUERY_TYPE.schedule );
		this.props.getData( QUERY_TYPE.users );
		this.props.getData( QUERY_TYPE.jobs );
	}

	componentDidMount() {
		this.props.setHamburgered( false );
	}

	render() {
		return(
			<div className={styles.dashboard}>
				<DashboardList
					data={this.props.data}
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

export default connect( mapStateToProps, { getData, setHamburgered } )(Dashboard)