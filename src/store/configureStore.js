import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { apiMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk"
import logger from "redux-logger"
import rootReducer from "../reducers"

export default function configureStore( initialState, history ) {

	const routerMW = routerMiddleware( history )

	const middleWares = [
		routerMW,
		thunk,
		apiMiddleware,
		logger
	];

	const enhancers = [
		applyMiddleware( ...middleWares )
	];

	const composeEnhancers =
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			: compose;

	const store = createStore(
		combineReducers( {
			...rootReducer,
			router: routerReducer
		} ),
		initialState,
		composeEnhancers( ...enhancers )
	);

	if ( module.hot ) {
		module.hot.accept( '../reducers', () => {
			store.replaceReducer( require( '../reducers' ).default );
		} )
	}

	return store;

}
