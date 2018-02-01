import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import * as actions from "../actions/"

const ping = ( state, action ) => {
  if ( action.type === actions.PING ) {
    console.log( "ping" );
    return( "ping" );
  }
  return( "" );
}

const rootReducer = combineReducers( {
  ping
} );

export default rootReducer
