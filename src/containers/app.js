import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import WebClock from "../containers/WebClock";
import TimeCard from "../containers/TimeCard";
import Schedule from "../containers/Schedule";
import NotFound404Redirect from "../utils/NotFound404Redirect";

const App = props => (
	<Provider store={props.store}>
		<ConnectedRouter history={props.history}>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/webclock" component={WebClock} />
				<Route path="/timecard" component={TimeCard} />
				<Route path="/schedule" component={Schedule} />
				<Route path="*" component={NotFound404Redirect} />
			</Switch>
		</ConnectedRouter>
	</Provider>
)

export default App;