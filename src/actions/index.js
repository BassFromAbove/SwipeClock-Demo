import { CALL_API } from "redux-api-middleware";

export const PING = "PING";
export const ping = () => ( {
  type: PING,
  payload: "Pinging..."
} );


export const QUERY_TYPE = {
	userTimeSummary: "users?_embed=time",
	userScheduleSummary: "users?_embed=schedule",
	failQuery: "nothing"
}

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

export function getData( queryType ) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3000/${queryType}`,
      method: 'GET',
      types: [
      	GET_DATA_REQUEST,
      	GET_DATA_SUCCESS,
      	GET_DATA_FAILURE
      ]
    }
  }
}
