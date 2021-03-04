import React, { useState, useEffect } from "react"
import { gql } from '@apollo/client'
import {client} from '../utils/apollo'
import WOcard from './workout_card'

export default function Home() {
	const [apiData, setapiData] = useState([{title:"No Workouts", desc:"No Data loaded", reps: null, weight: null}])

	useEffect(() => {
		console.log("GraphQL-Apollo Client")
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
			.then(result => {
				console.log(result.data.workouts)
				setapiData(result.data.workouts)
			})
	}, [])

	return (
		<div>
			<h2>Your Workouts</h2>
			{apiData.map((data) => {
				return<WOcard data={data} />
			})}
		</div>
	)
}
