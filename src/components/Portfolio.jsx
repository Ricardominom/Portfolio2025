import Project from "./Project"
import { db } from "../data/db"
import { useState } from "react"

export default function Portfolio() {

  const [data] = useState(db)

  return (    
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-8 gap-8  min-h-screen overflow-hidden">
        {data.map((project) => (
          <Project 
            key={project.id}
            image={project.image}
            id={project.id}
            projectName={project.projectName}
            url={project.url}
            description={project.description}
          />
        ))}
      </div>
    </>
  )
}
