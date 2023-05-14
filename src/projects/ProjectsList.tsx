import { useState } from "react";
import { Project, ProjectListProps } from "./Project";
import { ProjectForm } from "./ProjectForm";
import { ProjectCard } from "./ProjectCard";

export function ProjectList({projects, onSave}: ProjectListProps){
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => setProjectBeingEdited(project);
  
    const handleCancel = () => setProjectBeingEdited({});

    return (
        <div className="row">
        { projects.map((project: Project) => (
            <div key={project.id} className="cols-sm">

            { projectBeingEdited === project ? 
                (<ProjectForm onCancel={handleCancel} onSave={onSave}/>)
                : (<ProjectCard 
                    project={project} 
                    onEdit={handleEdit}></ProjectCard>)}
            </div>
        ))}
        </div>
    );
}