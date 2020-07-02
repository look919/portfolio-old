import React, { useContext } from 'react';
import { Context } from '../Wrapper';

const SingleProject = ({ project }) => {
  const context = useContext(Context);

  const lang = context.getLang();
  return (
    <figure className='project'>
      <div className='project__info'>
        <h2 className='project__title'>{project.title}</h2>
        <a href={project.github} className='project__link' target='_blanc'>
          Github
        </a>
        {project.online ? (
          <a href={project.url} className='project__link' target='_blanc'>
            Online
          </a>
        ) : (
          <p className='project__link project__link--grey'>Not online</p>
        )}
      </div>

      <div className='project__techs'>
        <img
          className='project__img'
          src={require(`../img/projects/${project.img}`)}
          alt='project'
        />
        <div className='project__details'>
          <div className='project__description'>
            <p>
              {lang === 'en' ? project.descriptionEn : project.descriptionPl}
              {lang === 'en' && project.title === 'ResumeGenerator' && (
                <a
                  href='https://drive.google.com/file/d/18zFQPB6Xhl6tQjVtKN8mUvSQQdtbFn5U/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  resume.
                </a>
              )}
              {lang === 'pl' && project.title === 'ResumeGenerator' && (
                <a
                  href='https://drive.google.com/file/d/18zFQPB6Xhl6tQjVtKN8mUvSQQdtbFn5U/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CV.
                </a>
              )}
            </p>
          </div>
          <div
            className={
              project.imgHover.length > 2
                ? 'project__technologies'
                : 'project__technologies project__technologies--short'
            }
          >
            {project.imgHover.map((el) => {
              return (
                <img
                  src={require(`../img/techs/${el}`)}
                  className='project__technologies__imgHover'
                  key={el}
                  alt='project technlogies'
                />
              );
            })}
          </div>
          {project.development && (
            <div className='project__development'>In development</div>
          )}
        </div>
      </div>
    </figure>
  );
};

export default SingleProject;
