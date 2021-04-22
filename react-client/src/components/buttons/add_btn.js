import React from "react"
import { Link } from "react-router-dom"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import CloseIcon from "@material-ui/icons/Close"
//import CheckIcon from "@material-ui/icons/Check"
import { HomeAddStyles } from "../../css/styles"

function ButtonLinkWrapper(props) {
	return (
		<Link
			to={`/${props.link}`}
			style={{
				textDecoration: "none",
				color: "white",
				lineHeight: "normal"
			}}
			onClick={() => console.log("Clicked Add Link")}>
			{props.children}
		</Link>
	)
}

export default function AddBtn(props) {
	const classes = HomeAddStyles()

	return (
		<div className={classes.root}>
			<Fab color="primary" aria-label="add" onClick={props.btnhandle}>
				{props.btntype ? (
					<ButtonLinkWrapper link="home">
						<CloseIcon />
					</ButtonLinkWrapper>
				) : (
					<ButtonLinkWrapper link="add">
						<AddIcon />
					</ButtonLinkWrapper>
				)}
			</Fab>
		</div>
	)
}
