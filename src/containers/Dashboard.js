import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { getData,QUERY_TYPE } from "../actions";
import DashboardList from "../components/DashboardList";

class Dashboard extends Component {

	constructor( props ) {
		super( props );
		this.clickGetData = this.clickGetData.bind( this );
	}

	componentWillMount() {
		this.props.getData( QUERY_TYPE.userTimeSummary );
	}

	clickGetData() {
		this.props.getData( QUERY_TYPE.failQuery );
	}

	render() {
		return(
			<div>
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
	data: state.rootReducer.data,
	isGettingData: state.rootReducer.isGettingData,
	getDataFailed: state.rootReducer.getDataFailed
} )

export default connect( mapStateToProps, { push, getData } )(Dashboard)