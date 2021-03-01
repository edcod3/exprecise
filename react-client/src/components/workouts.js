import React, { useState } from "react"

export default function Home() {
	const [apiData, setapiData] = useState([{ msg: "Workout Data" }])

	const fetchData = () => {
		return "GraphQL-Apollo Client"
	}

	return (
		<div>
			<h2>Your Workouts</h2>
			<button onClick={fetchData}></button>
			{apiData.map((data) => {
				return <pre>{JSON.stringify(data)}</pre>
			})}
		</div>
	)
}
