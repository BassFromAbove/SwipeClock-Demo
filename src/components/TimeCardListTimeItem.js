import React from "react";

const TimeCardListTimeItem = props => (
	<div>
	{props.time.length ?
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

export default TimeCardListTimeItem;