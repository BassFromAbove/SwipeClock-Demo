import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import * as actions from "../actions/"

export const initialState = {
  data: {
    timeSummary: [],
    scheduleSummary: [],
    time: [],
    schedule: [],
    users: [],
    jobs: []
  },
  isGettingData: null,
  getDataFailed: false,
  hamburgered: false,
  webclock: {
    started: false,
    startTime: null,
    times: []
  },
  login: {
    loggedIn: false,
    isLoggingIn: null,
  }
}

const ping = ( state, { type, payload } ) => {
  if ( type === actions.PING ) {
    return( "ping" );
  }
  return( "" );
}

const data = ( state = initialState.data, { type, payload, meta } ) => {
  if ( type === actions.GET_DATA_SUCCESS ) {
    switch( meta )
    {
      case actions.QUERY_TYPE.users:
        return( Object.assign( {}, state, { users: payload } ) );
      case actions.QUERY_TYPE.time:
        return( Object.assign( {}, state, { time: payload } ) );
      case actions.QUERY_TYPE.userTimeSummary:
        return( Object.assign( {}, state, { timeSummary: payload } ) );
      case actions.QUERY_TYPE.userScheduleSummary:
        return( Object.assign( {}, state, { scheduleSummary: payload } ) );
      case actions.QUERY_TYPE.schedule:
        return( Object.assign( {}, state, { schedule: payload } ) );
      case actions.QUERY_TYPE.jobs:
        return( Object.assign( {}, state, { jobs: payload } ) );
      default:
        break;

    }
  }
  return( state );
}

const isGettingData = ( state = initialState.isGettingData, { type, payload } ) => {
  if ( type === actions.GET_DATA_REQUEST ) {
    return true;
  }
  else if ( type === actions.GET_DATA_FAILURE ||
            type === actions.GET_DATA_SUCCESS ) {
    return false;
  }
  return( state );
}

const getDataFailed = ( state = initialState.getDataFailed, { type, payload } ) => {
  if ( type === actions.GET_DATA_REQUEST ||
       type === actions.GET_DATA_SUCCESS ) {
    return false;
  }
  else if ( type === actions.GET_DATA_FAILURE ) {
    return true;
  }
  return( state );
}

const hamburgered = ( state = initialState.hamburgered, { type, payload } ) => {
  if ( type === actions.SET_HAMBURGERED ) {
    return ( payload )
  }
  return( state );
}

const times = ( state = initialState.weblock, { type, payload } ) => {
}

const webclock = ( state = initialState.webclock, { type, payload } ) => {
  if ( type === actions.ADD_TIME ) {
    let newTimes = state.times.slice();
    newTimes.push( payload );
    return( Object.assign( {}, state, { times: newTimes } ) );
  }
  else if ( type === actions.START_TIME ) {
    return( Object.assign( {}, state, { startTime: payload, started: true } ) );
  }
  else if ( type === actions.STOP_TIME ) {
    return( Object.assign( {}, state, { started: false } ) );
  }
  return( state );
}

const login = ( state = initialState.login, { type, payload } ) => {
  return( state );
}

console.log( combineReducers( {
  ping,
  data,
  isGettingData,
  getDataFailed,
  hamburgered,
  webclock,
  login
} ) )

export default {
  ping,
  data,
  isGettingData,
  getDataFailed,
  hamburgered,
  webclock,
  login
};
