import React from "react"
import { ProjectContext } from "./project-context"

export const ProjectView: () => JSX.Element = () => {
	const project = React.useContext(ProjectContext)
	const onClick = () => {
		project.name = "New project name"
	}

	return (
		<button id="set-project" onClick={onClick}>Set project</button>
	)
}
