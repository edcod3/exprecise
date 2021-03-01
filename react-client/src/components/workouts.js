import React, {useState} from 'react'

export default function Home() {

    const [apiData, setapiData] = useState([{msg: "Workout Data"}])

    return (
        <div>
            <h2>Your Workouts</h2>
            {apiData.map(data => {
                return(<pre>{JSON.stringify(data)}</pre>)
            })}
        </div>
    )
}
