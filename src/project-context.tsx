import React from "react"

export interface Project {
	description: string
	name: string
}

export const ProjectContext = React.createContext<Partial<Project>>({})

export const ProjectContextProvider: (props: JSX.ElementChildrenAttribute) => JSX.Element = ({children}) => {
	const defaultProject: Project = {
		description: "Default project description",
		name: "Default project name"
	}

	return (
		<ProjectContext.Provider value={defaultProject}>
			{children}
		</ProjectContext.Provider>
	)
}
