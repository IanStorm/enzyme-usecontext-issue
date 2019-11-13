import React from "react"
import { ProjectContextProvider } from "./project-context"
import { ProjectView } from "./project-view"

export const ReactApp: () => JSX.Element = () => {
	return (
		<ProjectContextProvider>
			<ProjectView />
		</ProjectContextProvider>
	)
}
