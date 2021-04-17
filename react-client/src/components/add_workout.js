import React from "react"
import { gql } from "@apollo/client"
import { client } from "../utils/apollo"
import { useForm, Controller } from "react-hook-form"
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
	const { handleSubmit, watch, control } = useForm()
	//const {register } = useForm()
	//const { errors } = useForm()
	const onSubmit = (data) => {
		console.log(data)
		console.log("Title: " + data.title)
		client
			.mutate({
				mutation: gql`
					mutation AddWorkout(
						$title: String!
						$desc: String!
						$reps: Int!
						$weight: Int!
					) {
						add(
							title: $title
							desc: $desc
							reps: $reps
							weight: $weight
						) {
							title
							desc
							reps
						}
					}
				`,
				variables: {
					title: data.title,
					desc: data.description,
					reps: parseInt(data.reps),
					weight: parseInt(data.weight)
				}
			})
			.then((result) => {
				console.log(result.data.workouts)
			})
	}

	//console.log(watch("example"))

	return (
		<div>
			<h2>Add Workout</h2>
			<Card className={cardStyle} variant="outlined">
				<CardContent>
					<br />
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={formStyle.root}>
						<Controller
							name="title"
							as={
								<TextField
									className={formStyle.title}
									id="title"
									label="Title"
									required
									variant="outlined"
								/>
							}
							control={control}
							defaultValue=""
							rules={{
								required: true
							}}
						/>
						{[1, 2].map(() => (
							<br />
						))}
						<Controller
							name="description"
							as={
								<TextField
									className={formStyle.desc}
									id="description"
									variant="outlined"
									label="Description"
									multiline
									rows={4}
								/>
							}
							control={control}
							defaultValue=""
							rules={{
								required: true
							}}
						/>
						{[1, 2].map(() => (
							<br />
						))}
						<div className={formStyle.repkg_wrapper}>
							<Controller
								name="reps"
								as={
									<TextField
										id="reps"
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
									/>
								}
								control={control}
								defaultValue=""
								rules={{
									required: true,
									pattern: {
										value: /[0-9]/i,
										message: "Rep count is invalid"
									}
								}}
							/>
							<Controller
								name="weight"
								as={
									<TextField
										id="weight"
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
									/>
								}
								control={control}
								defaultValue=""
								rules={{
									required: true,
									pattern: {
										value: /[0-9]/i,
										message: "Weight count is invalid"
									}
								}}
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
