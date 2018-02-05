import React from "react";

const jobById = ( jobs, jobId ) =>
	jobs.map( job => job.id === jobId ? job.description : null );


const ScheduleListItemDetail = props => {

	return(
		<div>
		{props.scheduleItem.length ?
			<div>
				{props.scheduleItem.map( ( scheObj, i ) => {
					const jobDescription = jobById( props.jobs, scheObj.jobId );
					return (
						<div key={scheObj.id} className="grid__row">
							<span className="grid__cell">{jobDescription}</span>
							<span className="grid__cell">{scheObj.begin}</span>
							<span className="grid__cell">{scheObj.end}</span>
						</div>
					)
				} ) }
			</div>
		: ''
		}
		</div>
	)
}

export default ScheduleListItemDetail;