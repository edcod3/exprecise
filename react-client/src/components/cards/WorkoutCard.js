import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import ButtonWrapper from "../home/ButtonWrapper"
import { CardStyles } from "../../css/styles"

export default function WorkoutCard(props) {
	const classes = CardStyles()

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography
					variant="h5"
					component="h2"
					className={classes.title}>
					{props.data.title}
				</Typography>
				<Typography
					variant="body2"
					component="p"
					className={classes.desc}>
					{props.data.desc}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Reps: {props.data.reps ? props.data.reps : "None"}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Weight:{" "}
					{props.data.weight
						? props.data.weight.toString() + "kg"
						: "None"}
				</Typography>
			</CardContent>
			<ButtonWrapper
				classes={classes}
				data={props.data}
				reload={props.reload}
			/>
		</Card>
	)
}
