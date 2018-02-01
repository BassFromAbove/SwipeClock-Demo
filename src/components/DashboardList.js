import React from "react";
import DashboardListItem from "./DashboardListItem";

const DashboardList = props => {
	if ( props.isGettingData === null ) {
		return( '' );
	} else if ( props.isGettingData === true ) {
		return (
	 		<div>(spin...spin....)</div>
	 	);
	}
	else if ( props.getDataFailed === true ) {
		return( <div>Error loading data</div> );
	} else if ( props.data ) {
		return (
			<div>
				{props.data.map( ( item, index ) => (
						<DashboardListItem key={item.id} item={item} />
					) )
				}
			</div>
		)
	}
	return( '' );
}

export default DashboardList;