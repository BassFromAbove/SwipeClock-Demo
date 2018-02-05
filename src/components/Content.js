import styles from "./Content.scss";

import React from "react";
import { Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import WebClock from "../containers/WebClock";
import TimeCard from "../containers/TimeCard";
import Schedule from "../containers/Schedule";
import NotFound404Redirect from "../utils/NotFound404Redirect";

const Content = props => (
<div className={styles.content}>
	<Switch>
		<Route exact path="/" render={() => (
			<Redirect to="/dashboard"/>
		)} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/webclock" component={WebClock} />
		<Route path="/timecard" component={TimeCard} />
		<Route path="/schedule" component={Schedule} />
		<Route path="*" component={NotFound404Redirect} />
	</Switch>
</div>
)

export default Content