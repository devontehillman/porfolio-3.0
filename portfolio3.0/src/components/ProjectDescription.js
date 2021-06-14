import React, { Component } from 'react'
import projects from "../project.json"


export default class ProjectDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projects
        }
    }
    
    


    
    render() {
        // retrieve key id from route
        const index = this.props.match.params.id
        console.log(index)
        //use it to index the projects
        const selectedProject = this.state.projects[index-1]
        console.log(selectedProject)

        return (
            <div className="project-section">
                <h1>{selectedProject.title}</h1>
                <img src={selectedProject.image} alt="Webpage" />
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <a href={selectedProject.livePage}>
                        <h1>Deployed Page</h1>
                    </a>
                    <a href={selectedProject.gitRepo}>
                        <h1>Github Repo</h1>
                    </a>
                </div>
                <h2>{selectedProject.description}</h2>
            </div>
        )
    }
}
