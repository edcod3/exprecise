import React, { useState } from "react"
import { gql } from "@apollo/client"
import { client } from "../../utils/apollo"
import { useForm, Controller } from "react-hook-form"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
//import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import CloseIcon from "@material-ui/icons/Close"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import { CardStyles, AddStyles } from "../../css/styles"
import Br from "../../utils/Br"
import { ExitableAlert } from "../../utils/Alert"

export default function EditWorkout(props) {
	//CSS Styles
	const cardStyle = CardStyles().root
	const formStyle = AddStyles()

	//React-Hook-Form Stuff
	const { handleSubmit, control } = useForm()
	//const {watch} = useForm()
	//const {register } = useForm()
	//const { errors } = useForm()

	//State
	const [editMsg, seteditMsg] = useState({ succ: false, msg: "" })
	const onSubmit = (data) => {
		console.log(data)
		//console.log(props.workout)
		client
			.mutate({
				mutation: gql`
					mutation EditWorkout(
						$original_id: ID!
						$title: String!
						$desc: String
						$reps: Int
						$weight: Int
					) {
						edit(
							original_id: $original_id
							title: $title
							desc: $desc
							reps: $reps
							weight: $weight
						) {
							title
						}
					}
				`,
				variables: {
					original_id: props.workout.id,
					title: data.title,
					desc: data.description,
					reps: parseInt(data.reps),
					weight: parseInt(data.weight)
				}
			})
			.then((result) => {
				const wo_title = result.data.edit.title
				seteditMsg({ succ: true, msg: wo_title })
			})
	}

	//console.log(watch("example"))

	return (
		<Card className={cardStyle} variant="outlined">
			{editMsg.succ ? (
				<ExitableAlert
					severity="success"
					open={editMsg.succ}
					reload="true">
					<b>{editMsg.msg}</b> has been edited!
				</ExitableAlert>
			) : (
				""
			)}
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
						defaultValue={props.workout.title}
						rules={{
							required: true
						}}
					/>
					<Br />
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
						defaultValue={props.workout.desc}
						rules={{
							required: true
						}}
					/>
					<Br />
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
							defaultValue={props.workout.reps}
							rules={{
								required: false,
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
							defaultValue={props.workout.weight}
							rules={{
								required: false,
								pattern: {
									value: /[0-9]/i,
									message: "Weight count is invalid"
								}
							}}
						/>
					</div>
					<Br />
					<div className={formStyle.btn_wrapper}>
						<Button
							name="submit"
							type="submit"
							variant="contained"
							color="primary"
							endIcon={<Icon>add_task</Icon>}>
							Edit
						</Button>
						<Button
							variant="contained"
							className={formStyle.delete}
							startIcon={<CloseIcon />}
							onClick={() => props.reload()}>
							Cancel
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	)
}
