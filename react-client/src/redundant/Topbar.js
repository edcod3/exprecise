import React from "react"
import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import IconButton from "@material-ui/core/IconButton"
//import { HomeStyles } from "../../css/styles"

export default function Navbar(props) {
	//const classes = HomeStyles()
	//	const [open, setOpen] = useState(false)
	//	const handleDrawer = () => {
	//		setOpen(!open)
	//	}

	return (
		<AppBar>
			<Toolbar className={props.classes.toolbar}>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={props.handleDrawer}
					className={clsx(
						props.classes.menuButton,
						props.open && props.classes.menuButtonHidden
					)}>
					<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					className={props.classes.title}>
					Exprecise
				</Typography>
				<IconButton color="inherit">
					<Badge color="secondary">
						<SearchIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
