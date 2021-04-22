import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/navigation/muiNav"
import TrackerMenu from "./components/tracker/TrackerMenu"
import AddWorkout from "./components/cards/add_workout"
import Home from "./components/home/workouts"
function App() {
	return (
		<Router>
			<div className="App">
				<Dashboard>
					<Switch>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/workouts">
							<Home />
						</Route>
						<Route path="/add">
							<AddWorkout />
						</Route>
						<Route path="/tracker">
							<TrackerMenu />
						</Route>
						<Route path="/share">
							<div>
								<b>Share</b> is currently not available
							</div>
						</Route>
						<Route path="/integrations">
							<div>
								<b>Integrations</b> are currently not available
							</div>
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Dashboard>
			</div>
		</Router>
	)
}

export default App
