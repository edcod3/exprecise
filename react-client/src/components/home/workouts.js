import React, { useState, useEffect, useContext } from "react"
import { gql } from "@apollo/client"
import { client } from "../../utils/apollo"
//import WorkoutCard from "../cards/WorkoutCard"
import WorkoutWrapper from "../cards/CardWrapper"
import { SearchContext } from "../navigation/muiNav"

export default function Home() {
	const [apiData, setapiData] = useState([{}])

	const filter = useContext(SearchContext)

	useEffect(() => {
		setapiData([{}])
		client
			.query({
				query: gql`
					query {
						workouts {
							id
							title
							desc
							reps
							weight
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
		if (filter === "" || filter === undefined) {
			setdisData(apiData)
		} else {
			const fltrd = apiData.filter((data) => data.title.includes(filter))
			setdisData(fltrd)
		}
	}, [filter, apiData])

	return (
		<div>
			<h2>Your Workouts</h2>
			{disData.map((data, i) => {
				return <WorkoutWrapper key={`workout-${i}`} data={data} />
			})}
		</div>
	)
}
