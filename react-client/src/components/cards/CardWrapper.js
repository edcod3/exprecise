import React, { useState } from "react"
import WorkoutCard from "./WorkoutCard"
import EditWorkout from "./edit_workout"

export default function CardWrapper(props) {
	const [showEdit, setshowEdit] = useState(false)

	const changeCardStyle = () => {
		setshowEdit(!showEdit)
	}

	return (
		<div>
			{!showEdit ? (
				<WorkoutCard data={props.data} reload={changeCardStyle} />
			) : (
				<EditWorkout workout={props.data} reload={changeCardStyle} />
			)}
		</div>
	)
}
