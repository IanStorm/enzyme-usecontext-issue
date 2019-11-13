import { expect } from "chai"
import Enzyme, { shallow } from "enzyme"
import React16Adapter from "enzyme-adapter-react-16"
import React from "react"
import * as sinon from "sinon"
import { SinonSandbox } from "sinon"
import { Project } from "./project-context"
import { ProjectView } from "./project-view"

Enzyme.configure({ adapter: new React16Adapter() })

describe("<ProjectView />", function() {

	describe("'Set project' button", function() {

		const sinonSandbox: SinonSandbox = sinon.createSandbox()

		let mockProject: Project | undefined

		beforeEach(function() { mockProject = { name: "Mocked project name" } })

		afterEach(function() {
			sinonSandbox.restore()
		})

		it("initializes the project's name.", function() {
			sinonSandbox.stub(React, "useContext").returns(mockProject)
			const projectView = shallow(<ProjectView />)

			projectView.find("#set-project").simulate("click")

			expect(mockProject!.name).not.to.include("Mocked")
			expect(mockProject!.name).to.include("New")
		})

	})

})
