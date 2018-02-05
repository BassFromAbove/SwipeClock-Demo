import styles from "./app.scss";

import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import Content from "../components/Content";
import SideBar from "../containers/SideBar";
import TopBar from "../components/TopBar"

const App = props => (
	<Provider store={props.store}>
		<ConnectedRouter history={props.history}>
			<div className={styles.app}>
				<SideBar />
				<div className={styles[ "app__right-side" ]}>
					<TopBar />
					<Content />
				</div>
			</div>
		</ConnectedRouter>
	</Provider>
)

export default App;