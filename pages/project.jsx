import React from "react";
import styles from "../styles/Project.module.css";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commits: "4,245 commits",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commits: "245 commits",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commits: "245 commits",
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commits: "245 commits",
  },
];

const Project = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>// Top projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{project.title}</h3>
              <span className={styles.commits}>{project.commits}</span>
            </div>
            <div className={styles.codeBlock}>
              <pre>
                <code>
                  {`/**\n * ${project.title}\n * ${project.description}\n */`}
                </code>
              </pre>
              <button className={styles.button}>see the project</button>
            </div>
            <div className={styles.description}>{project.description}</div>
            <button className={styles.githubButton}>view GitHub</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
