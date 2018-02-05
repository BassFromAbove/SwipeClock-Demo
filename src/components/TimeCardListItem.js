import React from "react";
import TimeCardListTimeItem from "./TimeCardListTimeItem";

const TimeCardListItem = props => (
	<div>
		<span style={{ fontWeight: "bold" }}>{props.item.name}</span>
		<div className="grid__row--header">
			<span className="grid__cell">Date</span>
			<span className="grid__cell">In</span>
			<span className="grid__cell">Out</span>
			<span className="grid__cell">Total Hours</span>
		</div>
		<TimeCardListTimeItem time={props.item.time} />
		<br />
	</div>
)

export default TimeCardListItem;