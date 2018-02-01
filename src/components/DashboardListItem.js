import React from "react";
import DashboardListItemSchedule from "./DashboardListTimeItem";

const DashboardListItem = props => (
	<div>
		<span>{props.item.name}</span>
		<DashboardListItemSchedule time={props.item.time} />
		<br />
	</div>
)

export default DashboardListItem;