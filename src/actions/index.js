import { CALL_API } from "redux-api-middleware";

export const PING = "PING";
export const ping = () => ( {
  type: PING,
  payload: "Pinging..."
} );


export const QUERY_TYPE = {
	userTimeSummary: "users?_embed=time",
	userScheduleSummary: "users?_embed=schedule",
  time: "time",
  schedule: "schedule",
  users: "users",
  jobs: "jobs",
	failQuery: "nothing"
}

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export function getData( queryType ) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:3000/${queryType}`,
      method: "GET",
      types: [
        { type: GET_DATA_REQUEST, meta: queryType },
        { type: GET_DATA_SUCCESS, meta: queryType },
        { type: GET_DATA_FAILURE, meta: queryType }
      ]
    }
  }
}

export const SET_HAMBURGERED = "SET_HAMBURGERED";
export const setHamburgered = hamburgered => ({
  type: SET_HAMBURGERED,
  payload: hamburgered
})

export const START_TIME = "START_TIME";
export const startTimer = () => ( {
  type: START_TIME,
  payload: new Date()
} );

export const STOP_TIME = "STOP_TIME";
export const stopTimer = () => ( {
  type: STOP_TIME,
  payload: new Date()
} );

export const ADD_TIME = "ADD_TIME";
export const addTime = date => ( {
  type: ADD_TIME,
  payload: date
} );