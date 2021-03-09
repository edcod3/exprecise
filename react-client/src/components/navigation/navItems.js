import React from "react"
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

function HomeIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</SvgIcon>
	)
}

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<HomeIcon />
			</ListItemIcon>
			<ListItemText primary="Home" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<FitnessCenterIcon />
			</ListItemIcon>
			<ListItemText primary="Workouts" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Tracker" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Share" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary="Integrations" />
		</ListItem>
	</div>
)
