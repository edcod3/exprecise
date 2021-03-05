import React from "react"
import clsx from "clsx"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"

import { mainListItems } from "../components/navigation/navItems"

export default function Sidebar(props) {
	return (
		<Drawer
			variant="permanent"
			classes={{
				paper: clsx(
					props.classes.drawerPaper,
					!props.open && props.classes.drawerPaperClose
				)
			}}
			open={props.open}>
			<div className={props.classes.toolbarIcon}>
				<IconButton onClick={props.handleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>{mainListItems}</List>
			{/*<Divider />
        <List>{secondaryListItems}</List>*/}
		</Drawer>
	)
}
