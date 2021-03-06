import React from "react";

const DashboardListItem = props => (
	<div>
		<span style={{ fontWeight: "bold" }}>{props.user.name}</span>
		<div className="grid__row--header">
			<span className="grid__cell">Date</span>
			<span className="grid__cell">In</span>
			<span className="grid__cell">Out</span>
			<span className="grid__cell">Total Hours</span>
		</div>
		<DashboardListItemDetail time={props.item.time} />
		<br />
	</div>
)

export default DashboardListItem;