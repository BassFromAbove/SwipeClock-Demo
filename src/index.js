import styles from './index.scss';

import React from 'react';
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import App from './containers/App';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
const store = configureStore( {}, history );

render(
	<App store={store} history={history} />,
	document.getElementById('appRoot')
);