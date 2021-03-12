import React from "react"
import { useForm } from "react-hook-form"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
//import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import DeleteIcon from "@material-ui/icons/Delete"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import { CardStyles, AddStyles } from "../css/styles"

export default function AddWorkout() {
	//CSS Styles
	const cardStyle = CardStyles().root
	const formStyle = AddStyles()

	//React-Hook-Form Stuff
	const { register, handleSubmit, watch } = useForm()
	//const { errors } = useForm()
	const onSubmit = (data) => console.log(data)

	console.log(watch("example"))

	return (
		<div>
			<h2>Add Workout</h2>
			<Card className={cardStyle} variant="outlined">
				<CardContent>
					<br />
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={formStyle.root}>
						<TextField
							className={formStyle.title}
							name="title"
							label="Title"
							required
							variant="outlined"
							ref={register({ required: true })}
						/>
						{[1, 2].map(() => (
							<br />
						))}
						<TextField
							className={formStyle.desc}
							name="description"
							variant="outlined"
							label="Description"
							multiline
							rows={4}
							ref={register({ required: true })}
						/>
						{[1, 2].map(() => (
							<br />
						))}
						<div className={formStyle.repkg_wrapper}>
							<TextField
								name="reps"
								className={formStyle.rep_kg}
								label="Reps"
								variant="outlined"
								type="number"
								InputProps={{
									endAdornment: (
										<InputAdornment position="start">
											x
										</InputAdornment>
									)
								}}
								ref={register({ min: 0 })}
							/>
							<TextField
								name="weight"
								className={formStyle.rep_kg}
								label="Weight"
								variant="outlined"
								type="number"
								min="0"
								InputProps={{
									endAdornment: (
										<InputAdornment position="start">
											kg
										</InputAdornment>
									)
								}}
								ref={register({ min: 0 })}
							/>
						</div>
						{[1, 2].map(() => (
							<br />
						))}
						<div className={formStyle.btn_wrapper}>
							<Button
								name="submit"
								type="submit"
								variant="contained"
								color="primary"
								endIcon={<Icon>add_task</Icon>}>
								Submit
							</Button>
							<Button
								variant="contained"
								color="secondary"
								className={formStyle.delete}
								startIcon={<DeleteIcon />}>
								Delete
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
