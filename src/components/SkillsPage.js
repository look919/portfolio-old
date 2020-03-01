import React from "react";
import Header from "./Header";
import Info from "./Info";
import Card from "./Card";
import Nav from "./Nav";

import css from "../img/css.png";
import react from "../img/react.png";
import node from "../img/node.png";
import mongo from "../img/mongodb.png";

const SkillsPage = () => {
  const paragraph = [
    "The tools I use: VSCode, Git, Postman, Babel, Webpack, Eslint.",
    "Full list of courses I've taken part:",
    "Advanced CSS and Sass: Flexbox, Grid, Animations and More! by Jonas Schmedtmann ~28h",
    "The Modern JavaScript Bootcamp by Andrew Mead ~30h",
    "The Complete React Developer by Andrew Mead Course ~39h",
    "Node.js, Express, MongoDB & More by Jonas Schmedtmann ~42h",
    "MERN Stack Front To Back by Brad Traversy ~12h",
    "Kurs Gita by Maciej Aniserowicz ~8h"
  ];
  const nodeParagraphs = [
    "Express,",
    "Restful API, MVC,",
    "Error handling, security,",
    "Server side rendering with pug templates"
  ];
  const mongoParagraphs = [
    "Mongoose, Atlas, Compass,",
    "Data CRUD operations, aggreagtion,",
    "Data validation and protection,",
    "Data modelling"
  ];
  const cssParagraphs = [
    "Sass preprocessor,",
    "Float, flexbox and grid layouts,",
    "Cool animations, clean and nested code,",
    "Modern and responsive design,"
  ];
  const reactParagraphs = [
    "React v16 & v15,",
    "Redux,",
    "Hooks, Third party components,",
    "Basic understanding of unit testing with Jest"
  ];

  return (
    <div className="container">
      <Header title="Skills" />
      <Info title="What exactly can i do?" paragraph={paragraph} modalSvg={1} />
      <div className="content content--skillPage">
        <Card
          name="Node.js"
          img={node}
          paragraphs={nodeParagraphs}
          css="node"
        />
        <Card
          name="CSS & Sass"
          img={css}
          paragraphs={cssParagraphs}
          css="css"
        />
        <Card
          name="React"
          img={react}
          paragraphs={reactParagraphs}
          css="react"
        />
        <Card
          name="MongoDB"
          img={mongo}
          paragraphs={mongoParagraphs}
          css="db"
        />
      </div>
      <Nav />
    </div>
  );
};

export default SkillsPage;
