import styles from "./app.scss";

import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar"
import Dashboard from "./Dashboard";
import WebClock from "./WebClock";
import TimeCard from "./TimeCard";
import Schedule from "./Schedule";
import NotFound404Redirect from "../utils/NotFound404Redirect";

const App = props => (
	<Provider store={props.store}>
		<ConnectedRouter history={props.history}>
			<div className={styles.app}>
				<SideBar />
				<div className={styles.app__content}>
					<TopBar />
					<div  style={{ padding: "20px 20px" }}>
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
				</div>
			</div>
		</ConnectedRouter>
	</Provider>
)

export default App;