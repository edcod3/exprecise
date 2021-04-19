import React from "react"
//import { useState } from "react"
import { gql } from "@apollo/client"
import { client } from "../../utils/apollo"
import DeleteButton from "../buttons/del_btn"
import EditButton from "../buttons/edit_btn"

export default function ButtonWrapper(props) {
	//const [delShow, setdelShow] = useState({ visible: false, title: "" })

	const handleDelete = () => {
		console.log(props.data)
		client
			.mutate({
				mutation: gql`
					mutation DeleteWorkout($id: ID!) {
						delete(id: $id) {
							title
						}
					}
				`,
				variables: {
					id: props.data.id
				}
			})
			.then(() => {
				//const wo_title = result.data.delete.title
				//setdelShow({ visible: true, title: wo_title })
				window.location.reload()
			})
	}
	return (
		<div className={props.classes.btn_wrapper}>
			<EditButton className={props.classes.btn} />
			<br />
			<DeleteButton
				className={props.classes.btn}
				onClick={handleDelete}
			/>
		</div>
	)
}
