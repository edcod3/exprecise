import React from "react"
import { useForm } from "react-hook-form"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
//import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import { CardStyles } from "../css/styles"

export default function AddWorkout() {
	//CSS Styles
	const cardStyle = CardStyles().root

	//React-Hook-Form Stuff
	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = (data) => console.log(data)

	console.log(watch("example"))

	return (
		<div>
			<h2>Add Workout</h2>
			<Card className={cardStyle} variant="outlined">
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							name="title"
							label="Workout Title"
							required
							variant="outlined"
							ref={register({ required: true })}
						/>
						<br />
						<TextField
							name="description"
							variant="outlined"
							label="Workout Description"
							multiline
							rows={4}
							ref={register({ required: true })}
						/>
						<br />
						{errors.title && <span>This field is required</span>}
						<br />
						<input type="submit" />
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
