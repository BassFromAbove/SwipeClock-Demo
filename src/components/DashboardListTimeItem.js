import React from "react";

const DashboardListTimeItem = props => (
	<div>
	{props.time.length ?
		<div>
			{props.time.map( ( timeData, i ) => (
				<div key={timeData.id}>
					<span>Date: {timeData.date}</span>{ " " }
					<span>In: {timeData.in}</span>{ " " }
					<span>Out: {timeData.out}</span>{ " " }
					<span>Total Hours: {timeData[ "total hours" ]}</span>
				</div>
			))}
		</div>
	: ''
	}
	</div>
)

export default DashboardListTimeItem;