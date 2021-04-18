import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import CloseIcon from "@material-ui/icons/Close"
//import CheckIcon from "@material-ui/icons/Check"
import { HomeAddStyles } from "../../css/styles"

export default function AddBtn(props) {
	const classes = HomeAddStyles()

	return (
		<div className={classes.root}>
			<Fab color="primary" aria-label="add" onClick={props.btnhandle}>
				{props.btntype ? <CloseIcon /> : <AddIcon />}
			</Fab>
		</div>
	)
}
