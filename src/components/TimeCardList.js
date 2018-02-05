import React from "react";
import fonts from 'font-awesome/css/font-awesome.min.css';
import TimeCardListItem from "./TimeCardListItem";

const TimeCardList = props => {
	if ( props.isGettingData === null ) {
		return( '' );
	} else if ( props.isGettingData === true ) {
		return (
			<div className="global__spinner"><span className={`${fonts.fa} ${fonts[ "fa-spin" ]} ${fonts[ "fa-circle-o-notch" ]}`} /></div>
	 	);
	}
	else if ( props.getDataFailed === true ) {
		return( <div>Error loading data</div> );
	} else if ( props.data ) {
		return (
			<div>
				{props.data.map( ( item, index ) => (
					<TimeCardListItem key={item.id} item={item} />
				) ) }
			</div>
		)
	}
	return( '' );
}

export default TimeCardList;