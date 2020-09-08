import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage } from './landing.page';
import { AppLayout } from './app.layout';
import { ProtectedRoute } from './protected.route';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import './styles.css';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<ProtectedRoute
					exact
					path="/app"
					component={AppLayout}
				/>
				<Route
					path=""
					component={() => {
						return <h1>404 NOT FOUND</h1>;
					}}
				/>
			</Switch>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
