import React from "react";
import fonts from 'font-awesome/css/font-awesome.min.css';
import ScheduleListItem from "./ScheduleListItem";

const ScheduleList = props => {
	if ( props.isGettingData === null ) {
		return( '' );
	} else if ( props.isGettingData === true ) {
		return (
			<div className="global__spinner"><span className={`${fonts.fa} ${fonts[ "fa-spin" ]} ${fonts[ "fa-circle-o-notch" ]}`} /></div>
	 	);
	}
	else if ( props.getDataFailed === true ) {
		return( <div>Error loading data</div> );
	} else if ( props.schedules && props.jobs ) {
		return (
			<div>
				{props.schedules.map( ( item, index ) => (
					<ScheduleListItem key={item.id} item={item} jobs={props.jobs} />
				) ) }
			</div>
		)
	}
	return( '' );
}

export default ScheduleList;