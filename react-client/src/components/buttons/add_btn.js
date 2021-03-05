import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { HomeAddStyles } from "../../css/styles"

export default function AddBtn() {
	const classes = HomeAddStyles()

	return (
		<div className={classes.root}>
			<Fab color="primary" aria-label="add">
				<AddIcon />
			</Fab>
		</div>
	)
}
