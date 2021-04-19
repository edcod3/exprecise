import React from "react"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"

export default function EditButton(props) {
	return (
		<Button
			variant="contained"
			color="primary"
			endIcon={<Icon>edit</Icon>}
			{...props}>
			Edit
		</Button>
	)
}
