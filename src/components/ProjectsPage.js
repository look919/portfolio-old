import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";

import { ArrowRight, ArrowLeft } from "../Icons/Icons";

import chickyChicken from "../img/chickychicken.png";
import byt from "../img/byt.png";
import portfolio from "../img/portfolio.png";
import pt from "../img/pt.png";
import chessGame from "../img/chess.png";
import tgio from "../img/tgio.png";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      project: [
        {
          title: "ChickyChicken",
          github: "https://github.com/look919/chickyChicken",
          url: "https://chickychicken.herokuapp.com",
          img: chickyChicken
        },
        {
          title: "BookYourTime",
          github: "https://github.com/look919/Book-Your-Time",
          url: "https://bookyourtime.herokuapp.com/",
          img: byt
        },
        {
          title: "Portfolio",
          github: "https://github.com/look919/portfolio",
          url: "https://tomasz-wirkus-portfolio.herokuapp.com/",
          img: portfolio
        },
        {
          title: "ProgressTracker",
          github: "https://github.com/look919/Progress-Tracker",
          url: "http://progresstracker.surge.sh/index.html#",
          img: pt
        },
        {
          title: "C++ Chess game",
          github: "https://github.com/look919/Chess-game-Qt",
          url: "https://www.youtube.com/watch?v=oQRxG5nHmoY",
          img: chessGame
        },
        {
          title: "C++ ThreeGamesInOne",
          github: "https://github.com/look919/Three-games-in-one-Qt",
          url: "https://www.youtube.com/watch?v=SC5MxK_dTsI",
          img: tgio
        }
      ]
    };
  }
  addIndex = () => {
    const maxIndex = this.state.project.length;
    let newValueOfIndex = this.state.index + 1;

    if (newValueOfIndex === maxIndex) newValueOfIndex = 0;
    this.setState(() => ({ index: newValueOfIndex }));
  };
  subtractIndex = () => {
    const lastProjectIndex = this.state.project.length - 1;
    const minIndex = 0;
    let newValueOfIndex = this.state.index - 1;

    if (newValueOfIndex < minIndex) newValueOfIndex = lastProjectIndex;
    this.setState(() => ({ index: newValueOfIndex }));
  };

  render() {
    let index = this.state.index;
    let project = this.state.project[index];
    return (
      <div className="container">
        <Header title="Projects" />
        <div className="content content--projectPage">
          <button onClick={this.subtractIndex} className="project__btn">
            <ArrowLeft />
          </button>
          <figure className="project">
            <div className="project__info">
              <h2 className="project__title">{project.title}</h2>
              <a
                href={project.github}
                className="project__link"
                target="_blanc"
              >
                Github
              </a>
              <a href={project.url} className="project__link" target="_blanc">
                Online
              </a>
            </div>
            <img className="project__img" src={project.img} />
          </figure>
          <button onClick={this.addIndex} className="project__btn">
            <ArrowRight />
          </button>
        </div>
        <Nav />
      </div>
    );
  }
}

export default ProjectsPage;
