import React, { useState, createContext } from "react"
import clsx from "clsx"
import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import { mainListItems } from "./navItems"
import AddBtn from "../buttons/add_btn"
import Searchbar from "../home/Search"

//CSS Styling
import { HomeStyles } from "../../css/styles"

//Search Bar Context
export const SearchContext = createContext("")

export default function Dashboard(props) {
	const classes = HomeStyles()

	const [open, setOpen] = useState(false)
	const handleDrawer = () => {
		setOpen(!open)
	}

	const [search, setSearch] = useState("")
	const handleSearch = (event) => {
		setSearch(event.target.value)
		//console.log(search)
	}

	const [add, setAdd] = useState(false)
	const handleAdd = () => {
		setAdd(!add)
	}

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
						onClick={handleDrawer}
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
					<Searchbar search={handleSearch} />
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
					<Typography className={classes.toolbartitle}>
						Menu
					</Typography>
					<IconButton onClick={handleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{mainListItems}</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<SearchContext.Provider value={search}>
					{props.children}
				</SearchContext.Provider>
			</main>
			<AddBtn btntype={add} btnhandle={handleAdd} />
		</div>
	)
}

/*
	<div>
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Home filter={search} />
		</main>
		<AddBtn />
	</div> 
 */
