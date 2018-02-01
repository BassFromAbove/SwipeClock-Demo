import React from "react";
import { Route } from "react-router";
import Dashboard from "../containers/Dashboard";
import WebClock from "../containers/WebClock";
import TimeCard from "../containers/TimeCard";
import Schedule from "../containers/Schedule";
import NotFound404Redirect from "../utils/NotFound404Redirect";

export default (
	<Route exact path="/" render={ () => (
	    <Redirect to="/dashboard"/>
	)}>
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/webclock" component={WebClock} />
		<Route path="/timecard" component={TimeCard} />
		<Route path="/schedule" component={Schedule} />
		<Route path="*" component={NotFound404Redirect} />
  </Route>
)
