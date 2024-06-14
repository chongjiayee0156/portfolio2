import React, { useState, useEffect } from 'react';
import './Projects.scss';
import {projectsData} from './Projectsdata'; // Adjust the path based on your project structure

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Simulate fetching data from projects.json (replace with actual fetch logic if needed)
        // In a real-world scenario, you would fetch data asynchronously from the server
        setProjects(projectsData.projects);
    }, []);

    const handleGitHubClick = (url) => {
        window.open(url, "_blank"); // Opens the GitHub URL in a new tab
    };

    const handleDemoClick = (url) => {
        window.open(url, "_blank"); // Opens the Demo URL in a new tab
    };

    return (
        <div className="projects">
            {projectsData.map((project, index) => (
                <div key={index} className="project">
                    <h3>{project.name}</h3>
                    <div className='image'> 
                        <img src={project.img} alt={project.name} />
                    </div>
                    <p><strong>Description:</strong><br></br>{project.description}</p>
                    {project.techstack && <p><strong>Tech Stack:</strong><br></br> {project.techstack}</p>}
                    <div className='buttons'>
                    {<button onClick={() => handleGitHubClick(project.github)}>GitHub</button>}
                    {<button onClick={() => handleDemoClick(project.demo)}>Demo</button>}
                    </div>
                </div>
            ))}
        </div>
    );
}
