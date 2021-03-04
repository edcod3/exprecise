import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
	root: {
		marginBottom: 20,
		minWidth: 275,
		marginRight: 32
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	title: {
		paddingBottom: 10
	},
	pos: {
		marginTop: 5,
		marginBottom: 12,
		fontSize: 14
	}
})

export default function WOcard(props) {
	const classes = useStyles()

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography
					variant="h5"
					component="h2"
					className={classes.title}>
					{props.data.title}
				</Typography>
				<Typography variant="body2" component="p">
					{props.data.desc}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					<p>
						Reps: {props.data.weight ? props.data.weight : "None"}
					</p>
					<p>
						Weight:{" "}
						{props.data.weight ? props.data.weight + "kg" : "None"}
					</p>
				</Typography>
			</CardContent>
		</Card>
	)
}
