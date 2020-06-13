import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import UserDetails from './components/UserDetails'

import './App.css';

function App() {
	return (
		<Router>
			<div className={'app-container'}>
				<Switch>
					<Route path={'/user/:username'}>
						<UserDetails />
					</Route>
					<Route path={'/'}>
						<Home/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
