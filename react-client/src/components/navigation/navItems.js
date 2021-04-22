import React from "react"
import { Link } from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import SvgIcon from "@material-ui/core/SvgIcon"
import PeopleIcon from "@material-ui/icons/People"
import BarChartIcon from "@material-ui/icons/BarChart"
import LayersIcon from "@material-ui/icons/Layers"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"
import { ListItemLinkStyle } from "../../css/styles"

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

function WorkoutIcon() {
	return (
		<IconWrapper text="Workouts">
			<FitnessCenterIcon />
		</IconWrapper>
	)
}

function TrackerIcon() {
	return (
		<IconWrapper text="Tracker">
			<BarChartIcon />
		</IconWrapper>
	)
}

function ShareIcon() {
	return (
		<IconWrapper text="Share">
			<PeopleIcon />
		</IconWrapper>
	)
}

function IntegrationsIcon() {
	return (
		<IconWrapper text="Integrations">
			<LayersIcon />
		</IconWrapper>
	)
}

const linkItems = [
	{ path: "home", component: <HomeIcon /> },
	{ path: "workouts", component: <WorkoutIcon /> },
	{ path: "tracker", component: <TrackerIcon /> },
	{ path: "share", component: <ShareIcon /> },
	{ path: "integrations", component: <IntegrationsIcon /> }
]

export const mainListItems = (
	<div>
		{linkItems.map((link, i) => {
			return (
				<Link
					to={`/${link.path}`}
					key={`link-${i}`}
					style={ListItemLinkStyle}>
					{link.component}
				</Link>
			)
		})}
	</div>
)
