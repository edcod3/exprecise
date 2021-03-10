import React, { useState, useEffect } from "react"
import { gql } from "@apollo/client"
import { client } from "../../utils/apollo"
import WOcard from "../workout_card"

export default function Home(props) {
	const [apiData, setapiData] = useState([{}])

	useEffect(() => {
		setapiData([{}])
		client
			.query({
				query: gql`
					query {
						workouts {
							title
							desc
							reps
						}
					}
				`
			})
			.then((result) => {
				console.log(result.data.workouts)
				setapiData(result.data.workouts)
			})
	}, [])

	const [disData, setdisData] = useState([{}])
	useEffect(() => {
		setdisData([{}])
		if (props.filter === "") {
			setdisData(apiData)
		} else {
			const fltrd = apiData.filter((data) =>
				data.title.includes(props.filter)
			)
			setdisData(fltrd)
		}
	}, [props.filter, apiData])

	return (
		<div>
			<h2>Your Workouts</h2>
			{disData.map((data, i) => {
				return <WOcard key={`workout-${i}`} data={data} />
			})}
		</div>
	)
}
