"use client";

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Card from "../Card/Card";

interface Project {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const Projects = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/json/projects.json");
        const data: Project[] = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error loading project data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <div className={style.title}>My Projects</div>
        <p className={style.description}>
          These are some of the projects I&apos;ve worked on, showcasing my skills
          in web development. Feel free to explore and see the code behind each
          project <span className={style.hereBtn}><a href="https://github.com/LiviuCaciulatu"
            target="_blank"
            rel="noopener noreferrer">Here</a></span>.
        </p>
      </div>
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
