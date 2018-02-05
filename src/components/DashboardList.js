import React from "react";
import fonts from 'font-awesome/css/font-awesome.min.css';

const DashboardList = props => {
	if ( props.isGettingData === null ) {
		return( '' );
	} else if ( props.isGettingData === true ) {
		return (
			<div className="global__spinner"><span className={`${fonts.fa} ${fonts[ "fa-spin" ]} ${fonts[ "fa-circle-o-notch" ]}`} /></div>
	 	);
	}
	else if ( props.getDataFailed === true ) {
		return( <div>Error loading data</div> );
	} else if ( props.data.users && props.data.time && props.data.jobs ) {

		return (
			<div>
				<span style={{ fontWeight: "bold" }}>Staff</span>
				<div className="grid__row--header">
					<span className="grid__cell">Name</span>
					<span className="grid__cell">Total Hours</span>
				</div>
				<div>
					{props.data.users.map( staffMember => {

						let totalHours = 0;
						for ( let i = 0; i < props.data.time.length; i++ ) {
							if ( props.data.time[ i ].userId === staffMember.id ) {
								totalHours += props.data.time[ i ][ "total hours" ];
							}
						}

						return (
							<div key={staffMember.id} className="grid__row">
								<span className="grid__cell">{staffMember.name}</span>
								<span className="grid__cell">{totalHours}</span>
							</div>
						);
					} ) }
				</div>
				<div style={{ fontWeight: "bold", marginTop: "20px" }}>Jobs</div>
				<div className="grid__row--header">
					<span className="grid__cell">Description</span>
					<span className="grid__cell">Total Staff</span>
				</div>
				<div>
					{props.data.jobs.map( job => {

						let totalStaff = 0;
						for ( let i = 0; i < props.data.schedule.length; i++ ) {
							if ( props.data.schedule[ i ].jobId === job.id ) {
								totalStaff += 1;
							}
						}

						return (
							<div key={job.id}className="grid__row">
								<span className="grid__cell">{job.description}</span>
								<span className="grid__cell">{totalStaff}</span>
							</div>
						);
					} ) }
				</div>
			</div>
		)
	}
	return( '' );
}

export default DashboardList;