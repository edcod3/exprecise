import React from "react"
import { Link } from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
//import ListSubheader from "@material-ui/core/ListSubheader"
import SvgIcon from "@material-ui/core/SvgIcon"
import PeopleIcon from "@material-ui/icons/People"
import BarChartIcon from "@material-ui/icons/BarChart"
import LayersIcon from "@material-ui/icons/Layers"
//import AssignmentIcon from "@material-ui/icons/Assignment"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"

function IconWrapper(props) {
	return (
		<ListItem button>
			<ListItemIcon>{props.children}</ListItemIcon>
			<ListItemText primary={props.text} />
		</ListItem>
	)
}

function HomeIcon(props) {
	return (
		<IconWrapper text="Home">
			<SvgIcon {...props}>
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
			</SvgIcon>
		</IconWrapper>
	)
}

function WorkoutIcon(props) {
	return (
		<IconWrapper text="Workouts">
			<FitnessCenterIcon />
		</IconWrapper>
	)
}

function TrackerIcon(props) {
	return (
		<IconWrapper text="Tracker">
			<BarChartIcon />
		</IconWrapper>
	)
}

function ShareIcon(props) {
	return (
		<IconWrapper text="Share">
			<PeopleIcon />
		</IconWrapper>
	)
}

function IntegrationsIcon(props) {
	return (
		<IconWrapper text="Integrations">
			<LayersIcon />
		</IconWrapper>
	)
}

export const mainListItems = (
	<div>
		<Link
			to="/home"
			style={{ textDecoration: "none", color: "black" }}
			onClick={() => console.log("Clicked Home Link")}>
			<HomeIcon />
		</Link>
		<Link
			to="/workouts"
			style={{ textDecoration: "none", color: "black" }}
			onClick={() => console.log("Clicked Workout Link")}>
			<WorkoutIcon />
		</Link>
		<Link
			to="/tracker"
			style={{ textDecoration: "none", color: "black" }}
			onClick={() => console.log("Clicked Tracker Link")}>
			<TrackerIcon />
		</Link>
		<Link
			to="/share"
			style={{ textDecoration: "none", color: "black" }}
			onClick={() => console.log("Clicked Share Link")}>
			<ShareIcon />
		</Link>
		<Link
			to="/integrations"
			style={{ textDecoration: "none", color: "black" }}
			onClick={() => console.log("Clicked Home Link")}>
			<IntegrationsIcon />
		</Link>
	</div>
)
