import React, { useState } from "react"
import MuiAlert from "@material-ui/lab/Alert"
import Snackbar from "@material-ui/core/Snackbar"
import { CardStyles } from "../css/styles"

export function ExitableAlert(props) {
	//const AddStyle = CardStyles().root
	const [open, setOpen] = useState(props.open)

	const handleClose = (event, reason) => {
		if (props.reload === "true") {
			window.location.reload()
		}
		setOpen(false)
	}

	return (
		<Snackbar
			anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}>
			<MuiAlert
				onClose={handleClose}
				elevation={6}
				variant="filled"
				{...props}
			/>
		</Snackbar>
	)
}

export default function Alert(props) {
	const AddStyle = CardStyles().root
	return (
		<MuiAlert
			className={AddStyle}
			elevation={6}
			variant="filled"
			{...props}
		/>
	)
}
