import React from "react";

const SingleProject = ({ project, side }) => {
  return (
    <figure className="project">
      <div className="project__info">
        <h2 className="project__title">{project.title}</h2>
        <a href={project.github} className="project__link" target="_blanc">
          Github
        </a>
        <a href={project.url} className="project__link" target="_blanc">
          Online
        </a>
      </div>

      <div className="project__techs">
        <img
          className="project__img"
          src={require(`../img/projects/${project.img}`)}
          alt="project"
        />

        <div className="project__technologies">
          {project.imgHover.map((el) => {
            return (
              <img
                src={require(`../img/techs/${el}`)}
                className="project__technologies__imgHover"
                key={el}
                alt="project technlogies"
              />
            );
          })}
        </div>
        {project.development && (
          <div className="project__development">In development</div>
        )}
      </div>
    </figure>
  );
};

export default SingleProject;
