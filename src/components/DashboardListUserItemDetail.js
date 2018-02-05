import React from "react";

const jobBySchedule = ( jobs, jobId ) =>
	jobs.reduce( ( accumulator, currentValue ) => accumulator += job.id === jobId ? 1 : 0 );

const DashboardListUserItemDetail = props => (
	<div>
	{props.users.length ?
		<div>
			{props.time.map( ( timeData, i ) => (
				<div key={timeData.id} className="grid__row">
					<span className="grid__cell">{timeData.date}</span>
					<span className="grid__cell">{timeData.in}</span>
					<span className="grid__cell">{timeData.out}</span>
					<span className="grid__cell">{timeData[ "total hours" ]}</span>

				</div>
			))}
		</div>
	: ''
	}
	</div>
)

export default DashboardListUserItemDetail;