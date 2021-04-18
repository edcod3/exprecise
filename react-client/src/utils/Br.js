import React from "react"

export default function Br() {
	const brArr = [1, 2]
	return brArr.map((br) => <br key={`br-${br}`} />)
}
