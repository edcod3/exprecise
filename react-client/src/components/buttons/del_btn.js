import React from "react"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"

export default function DeleteButton(props) {
	return (
		<Button
			variant="contained"
			color="secondary"
			endIcon={<DeleteIcon />}
			{...props}>
			Delete
		</Button>
	)
}
