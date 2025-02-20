"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Card from "../Card/Card";

const Projects = () => {
  const [projectData, setProjectData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/json/projects.json");
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error loading project data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.gallery}>
        {projectData.map((project, index) => (
          <div key={index} className={style.cardContainer}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Card
                imageSrc={project.imageSrc}
                altText={project.altText}
                title={project.title}
                description={project.description}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
