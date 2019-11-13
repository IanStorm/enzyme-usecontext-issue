import React from "react"
import { ProjectContext } from "./project-context"
// import React, { useContext } from "react"

export const ProjectView: () => JSX.Element = () => {
	const projectA = React.useContext(ProjectContext)
	// const projectB = useContext(ProjectContext) // ☝ Showcase for `useContext` (instead of `React.useContext`) does not work yet!
	const onClick = () => {
		projectA.name = "New project name"
		// projectB.description = "New project description"
	}

	return (
		<button id="set-project" onClick={onClick}>Set project</button>
	)
}
