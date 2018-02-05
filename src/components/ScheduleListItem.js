import React from "react";
import ScheduleListItemDetail from "./ScheduleListItemDetail";

const ScheduleListItem = props => (
	<div>
		<span style={{ fontWeight: "bold" }}>{props.item.name}</span>
		<div className="grid__row--header">
			<span className="grid__cell">Description</span>
			<span className="grid__cell">Begin</span>
			<span className="grid__cell">End</span>
		</div>
		<ScheduleListItemDetail jobs={props.jobs} scheduleItem={props.item.schedule} />
		<br />
	</div>
)

export default ScheduleListItem;