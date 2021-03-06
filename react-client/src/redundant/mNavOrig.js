import React, { useState } from "react"
import clsx from "clsx"
import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
//import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import Badge from "@material-ui/core/Badge"
//import Container from '@material-ui/core/Container';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Link from "@material-ui/core/Link"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
//import NotificationsIcon from "@material-ui/icons/Notifications"
import SearchIcon from "@material-ui/icons/Search"
//import secondaryListItems from "./navItems"
import { mainListItems } from "../components/navigation/navItems"
import Home from "../components/workouts"
import AddBtn from "../components/buttons/add_btn"
import { HomeStyles } from "../css/styles"

export default function Dashboard() {
	const classes = HomeStyles()
	const [open, setOpen] = useState(false)
	const handleDrawerOpen = () => {
		setOpen(true)
	}
	const handleDrawerClose = () => {
		setOpen(false)
	}
	//const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden
						)}>
						<MenuIcon />
					</IconButton>
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.title}>
						Exprecise
					</Typography>
					<IconButton color="inherit">
						<Badge color="secondary">
							<SearchIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(
						classes.drawerPaper,
						!open && classes.drawerPaperClose
					)
				}}
				open={open}>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{mainListItems}</List>
				{/*<Divider />
				<List>{secondaryListItems}</List>*/}
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Home />
			</main>
			<AddBtn />
		</div>
	)
}
