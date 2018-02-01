import React from "react";

const DashboardListItemSchedule = props => (
	<div>
	{props.schedule.length ?
		<div>
			{props.schedule.map( ( appointment, i ) => (
				<div key={appointment.id}>
					<span>Begin: {appointment.begin}</span>&nbsp;
					<span>End: {appointment.end}</span>
				</div>
			))}
		</div>
	: ''
	}
	</div>
)

export default DashboardListItemSchedule;