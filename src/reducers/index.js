import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import * as actions from "../actions/"

export const initialState = {
  data: [],
  isGettingData: null,
  getDataFailed: false
}

const ping = ( state, action ) => {
  if ( action.type === actions.PING ) {
    console.log( "ping" );
    return( "ping" );
  }
  return( "" );
}

const data = ( state = initialState.data, action ) => {
  if ( action.type === actions.GET_DATA_SUCCESS ) {
    return action.payload;
  }
  return( state );
}

const isGettingData = ( state = initialState.isGettingData, action ) => {
  if ( action.type === actions.GET_DATA_REQUEST ) {
    return true;
  }
  else if ( action.type === actions.GET_DATA_FAILURE ||
            action.type === actions.GET_DATA_SUCCESS ) {
    return false;
  }
  return( state );
}

const getDataFailed = ( state = initialState.getDataFailed, action ) => {
  if ( action.type === actions.GET_DATA_REQUEST ||
       action.type === actions.GET_DATA_SUCCESS ) {
    return false;
  }
  else if ( action.type === actions.GET_DATA_FAILURE ) {
    return true;
  }
  return( state );
}

export default combineReducers( {
  ping,
  data,
  isGettingData,
  getDataFailed
} );
